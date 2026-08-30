const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { query } = require('../db');

const VIDEOS_DIR = path.join(__dirname, '..', 'uploads', 'videos');
if (!fs.existsSync(VIDEOS_DIR)) fs.mkdirSync(VIDEOS_DIR, { recursive: true });

const ALLOWED_MIME = [
  'video/mp4', 'video/webm', 'video/quicktime', 'video/avi',
  'video/x-msvideo', 'video/x-matroska', 'video/ogg'
];
const ALLOWED_EXT = /\.(mp4|webm|mov|avi|mkv|ogv)$/i;
const DANGEROUS_EXT = /\.(exe|bat|cmd|sh|php|py|js|jar|msi|com|pif|scr|vbs|js|ws|wsf|ps1|reg|inf)$/i;
const MAX_SIZE = 100 * 1024 * 1024;

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, VIDEOS_DIR),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase() || '.mp4';
    cb(null, uuidv4() + ext);
  }
});

const upload = multer({
  storage,
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

router.post('/upload', upload.single('video'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No video file provided' });
    const id = uuidv4();
    const { userId, duration, receiverId } = req.body;
    const filePath = '/uploads/videos/' + req.file.filename;
    const durationInt = parseInt(duration) || 0;
    const fileSizeInt = req.file.size;
    const mediaType = req.file.mimetype || 'video/mp4';
    const receiverVal = receiverId || null;

    await query(
      `INSERT INTO video_recordings (id, user_id, receiver_id, file_path, original_name, duration, file_size, media_type)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [id, userId, receiverVal, filePath, req.file.originalname, durationInt, fileSizeInt, mediaType]
    );

    res.json({ id, file_path: filePath, duration: durationInt, file_size: fileSizeInt, media_type: mediaType, created_at: new Date().toISOString() });
  } catch (err) {
    console.error('Video upload error:', err);
    res.status(500).json({ error: 'Upload failed' });
  }
});

router.get('/list', async (req, res) => {
  try {
    const { userId } = req.query;
    let result;
    if (userId) {
      result = await query(
        `SELECT id, user_id, receiver_id, file_path, original_name, duration, file_size, media_type, created_at, seen, reactions
         FROM video_recordings WHERE user_id = $1 OR receiver_id = $1 ORDER BY created_at DESC`,
        [userId]
      );
    } else {
      result = await query(
        `SELECT id, user_id, receiver_id, file_path, original_name, duration, file_size, media_type, created_at, seen, reactions
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
      `SELECT id, user_id, receiver_id, file_path, original_name, duration, file_size, media_type, created_at, seen, reactions, reply_to
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
    const result = await query(`SELECT file_path, media_type FROM video_recordings WHERE id = $1`, [id]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Not found' });
    const rec = result.rows[0];
    const fullPath = path.join(__dirname, '..', rec.file_path);
    if (!fs.existsSync(fullPath)) return res.status(404).json({ error: 'File not found' });

    const stat = fs.statSync(fullPath);
    const fileSize = stat.size;
    const contentType = rec.media_type || 'video/mp4';
    const range = req.headers.range;

    if (range) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
      const chunkSize = end - start + 1;

      res.writeHead(206, {
        'Content-Range': 'bytes ' + start + '-' + end + '/' + fileSize,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunkSize,
        'Content-Type': contentType,
        'Content-Disposition': 'inline'
      });
      fs.createReadStream(fullPath, { start: start, end: end }).pipe(res);
    } else {
      res.writeHead(200, {
        'Content-Length': fileSize,
        'Content-Type': contentType,
        'Accept-Ranges': 'bytes',
        'Content-Disposition': 'inline'
      });
      fs.createReadStream(fullPath).pipe(res);
    }
  } catch (err) {
    console.error('Video serve error:', err);
    res.status(500).json({ error: 'Failed to serve video' });
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
    const result = await query(`SELECT file_path FROM video_recordings WHERE id = $1`, [id]);
    if (result.rows.length > 0) {
      const fullPath = path.join(__dirname, '..', result.rows[0].file_path);
      if (fs.existsSync(fullPath)) fs.unlinkSync(fullPath);
    }
    await query(`DELETE FROM video_recordings WHERE id = $1`, [id]);
    res.json({ ok: true });
  } catch (err) {
    console.error('Video delete error:', err);
    res.status(500).json({ error: 'Failed to delete' });
  }
});

router.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') return res.status(413).json({ error: 'Video too large. Max 100MB allowed.' });
    return res.status(400).json({ error: err.message });
  }
  if (err) return res.status(400).json({ error: err.message });
  next();
});

module.exports = router;
