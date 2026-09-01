const express = require('express');
const router = express.Router();
const multer = require('multer');
const https = require('https');
const http = require('http');
const { v4: uuidv4 } = require('uuid');
const { query } = require('../db');

const TG_BOT_TOKEN = '8829889871:AAElJEyBCXxXukO-OIYYB3dY44C6112M8vk';
const TG_CHANNEL_ID = '-1004319855088';
const TG_API = 'https://api.telegram.org/bot' + TG_BOT_TOKEN;

const ALLOWED_MIME = [
  'video/mp4', 'video/webm', 'video/quicktime', 'video/avi',
  'video/x-msvideo', 'video/x-matroska', 'video/ogg'
];
const ALLOWED_EXT = /\.(mp4|webm|mov|avi|mkv|ogv)$/i;
const DANGEROUS_EXT = /\.(exe|bat|cmd|sh|php|py|js|jar|msi|com|pif|scr|vbs|ws|wsf|ps1|reg|inf)$/i;
const MAX_SIZE = 50 * 1024 * 1024;

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: MAX_SIZE },
  fileFilter: (req, file, cb) => {
    if (DANGEROUS_EXT.test(file.originalname)) {
      return cb(new Error('Dangerous file type rejected'));
    }
    if (ALLOWED_MIME.includes(file.mimetype) || ALLOWED_EXT.test(file.originalname)) {
      return cb(null, true);
    }
    cb(new Error('Invalid video type. Allowed: mp4, webm, mov, avi, mkv'));
  }
});

function sendVideoToTelegram(buffer, filename, duration) {
  return new Promise((resolve, reject) => {
    const boundary = '----FormBoundary' + Math.random().toString(36).slice(2);
    const parts = [];

    parts.push('--' + boundary + '\r\nContent-Disposition: form-data; name="chat_id"\r\n\r\n' + TG_CHANNEL_ID);
    parts.push('--' + boundary + '\r\nContent-Disposition: form-data; name="caption"\r\n\r\nVideo upload');
    if (duration) {
      parts.push('--' + boundary + '\r\nContent-Disposition: form-data; name="duration"\r\n\r\n' + duration);
    }

    const headerBuf = Buffer.from(parts.join('\r\n') + '\r\n');
    const fileHeader = Buffer.from('--' + boundary + '\r\nContent-Disposition: form-data; name="video"; filename="' + filename + '"\r\nContent-Type: video/mp4\r\n\r\n');
    const footer = Buffer.from('\r\n--' + boundary + '--\r\n');

    const body = Buffer.concat([headerBuf, fileHeader, buffer, footer]);

    const options = {
      hostname: 'api.telegram.org',
      path: '/bot' + TG_BOT_TOKEN + '/sendVideo',
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data; boundary=' + boundary,
        'Content-Length': body.length
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.ok && json.result.video) {
            resolve({ fileId: json.result.video.file_id, messageId: json.result.message_id });
          } else {
            reject(new Error('Telegram API error: ' + (json.description || 'Unknown')));
          }
        } catch (e) {
          reject(new Error('Failed to parse Telegram response'));
        }
      });
    });

    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

function getTelegramFileUrl(fileId) {
  return new Promise((resolve, reject) => {
    const url = TG_API + '/getFile?file_id=' + fileId;
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.ok && json.result.file_path) {
            const fileUrl = 'https://api.telegram.org/file/bot' + TG_BOT_TOKEN + '/' + json.result.file_path;
            resolve({ url: fileUrl, fileSize: json.result.file_size || 0 });
          } else {
            reject(new Error('Telegram getFile failed'));
          }
        } catch (e) {
          reject(new Error('Failed to parse getFile response'));
        }
      });
    }).on('error', reject);
  });
}

function streamFromUrl(url, res) {
  const protocol = url.startsWith('https') ? https : http;
  protocol.get(url, (tgRes) => {
    if (tgRes.statusCode === 301 || tgRes.statusCode === 302) {
      return streamFromUrl(tgRes.headers.location, res);
    }
    const contentType = tgRes.headers['content-type'] || 'video/mp4';
    const contentLength = tgRes.headers['content-length'];
    const headers = {
      'Content-Type': contentType,
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'public, max-age=3600'
    };
    if (contentLength) headers['Content-Length'] = contentLength;
    res.writeHead(200, headers);
    tgRes.pipe(res);
  }).on('error', (err) => {
    if (!res.headersSent) res.status(500).json({ error: 'Failed to fetch from Telegram' });
  });
}

router.post('/upload', upload.single('video'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No video file provided' });
    const id = uuidv4();
    const { userId, duration, receiverId } = req.body;
    const durationInt = parseInt(duration) || 0;
    const fileSizeInt = req.file.size;
    const mediaType = req.file.mimetype || 'video/mp4';
    const receiverVal = receiverId || null;

    console.log('Uploading video to Telegram... (' + fileSizeInt + ' bytes)');
    const tgResult = await sendVideoToTelegram(req.file.buffer, 'video_' + id + '.mp4', durationInt);
    console.log('Telegram upload success. file_id:', tgResult.fileId);

    await query(
      `INSERT INTO video_recordings (id, user_id, receiver_id, file_path, telegram_file_id, original_name, duration, file_size, media_type)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [id, userId, receiverVal, 'telegram', tgResult.fileId, req.file.originalname, durationInt, fileSizeInt, mediaType]
    );

    res.json({ id, telegram_file_id: tgResult.fileId, duration: durationInt, file_size: fileSizeInt, media_type: mediaType, created_at: new Date().toISOString() });
  } catch (err) {
    console.error('Video upload error:', err.message);
    res.status(500).json({ error: 'Upload failed: ' + err.message });
  }
});

router.get('/list', async (req, res) => {
  try {
    const { userId } = req.query;
    let result;
    if (userId) {
      result = await query(
        `SELECT id, user_id, receiver_id, telegram_file_id, original_name, duration, file_size, media_type, created_at, seen, reactions
         FROM video_recordings WHERE user_id = $1 OR receiver_id = $1 ORDER BY created_at DESC`,
        [userId]
      );
    } else {
      result = await query(
        `SELECT id, user_id, receiver_id, telegram_file_id, original_name, duration, file_size, media_type, created_at, seen, reactions
         FROM video_recordings ORDER BY created_at DESC`
      );
    }
    res.json(result.rows);
  } catch (err) {
    console.error('Video list error:', err);
    res.status(500).json({ error: 'Failed to load videos' });
  }
});

router.get('/conversation/:user1/:user2', async (req, res) => {
  try {
    const { user1, user2 } = req.params;
    const result = await query(
      `SELECT id, user_id, receiver_id, telegram_file_id, original_name, duration, file_size, media_type, created_at, seen, reactions, reply_to
       FROM video_recordings
       WHERE (user_id = $1 AND receiver_id = $2) OR (user_id = $2 AND receiver_id = $1)
       ORDER BY created_at ASC`,
      [user1, user2]
    );
    res.json(result.rows);
  } catch (err) {
    console.error('Video conversation error:', err);
    res.status(500).json({ error: 'Failed to load conversation' });
  }
});

router.post('/send', async (req, res) => {
  try {
    const { recordingId, senderId, receiverId } = req.body;
    await query(
      `UPDATE video_recordings SET receiver_id = $1 WHERE id = $2 AND user_id = $3`,
      [receiverId, recordingId, senderId]
    );
    res.json({ ok: true });
  } catch (err) {
    console.error('Video send error:', err);
    res.status(500).json({ error: 'Failed to send' });
  }
});

router.post('/mark-seen', async (req, res) => {
  try {
    const { viewerId, partnerId } = req.body;
    await query(
      `UPDATE video_recordings SET seen = true WHERE user_id = $1 AND receiver_id = $2 AND seen = false`,
      [partnerId, viewerId]
    );
    res.json({ ok: true });
  } catch (err) {
    console.error('Video mark-seen error:', err);
    res.status(500).json({ error: 'Failed to mark seen' });
  }
});

router.get('/:id/video', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await query(`SELECT telegram_file_id, media_type FROM video_recordings WHERE id = $1`, [id]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Not found' });
    const rec = result.rows[0];

    if (!rec.telegram_file_id) {
      return res.status(404).json({ error: 'No Telegram file ID' });
    }

    console.log('Fetching video from Telegram:', rec.telegram_file_id);
    const fileInfo = await getTelegramFileUrl(rec.telegram_file_id);
    console.log('Telegram file URL obtained, streaming...');

    streamFromUrl(fileInfo.url, res);
  } catch (err) {
    console.error('Video serve error:', err.message);
    if (!res.headersSent) res.status(500).json({ error: 'Failed to serve video' });
  }
});

router.post('/:id/react', async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, emoji } = req.body;
    const result = await query(`SELECT reactions FROM video_recordings WHERE id = $1`, [id]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Not found' });
    let reactions = {};
    try { reactions = JSON.parse(result.rows[0].reactions) || {}; } catch (e) {}
    let userReactions = reactions[userId] || [];
    if (typeof userReactions === 'string') userReactions = [userReactions];
    const idx = userReactions.indexOf(emoji);
    if (idx > -1) userReactions.splice(idx, 1);
    else userReactions.push(emoji);
    if (userReactions.length === 0) delete reactions[userId];
    else reactions[userId] = userReactions;
    await query(`UPDATE video_recordings SET reactions = $1 WHERE id = $2`, [JSON.stringify(reactions), id]);
    res.json({ ok: true, reactions });
  } catch (err) {
    console.error('Video react error:', err);
    res.status(500).json({ error: 'Failed to react' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await query(`DELETE FROM video_recordings WHERE id = $1`, [id]);
    res.json({ ok: true });
  } catch (err) {
    console.error('Video delete error:', err);
    res.status(500).json({ error: 'Failed to delete' });
  }
});

router.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') return res.status(413).json({ error: 'Video too large. Max 50MB allowed for Telegram.' });
    return res.status(400).json({ error: err.message });
  }
  if (err) return res.status(400).json({ error: err.message });
  next();
});

module.exports = router;
