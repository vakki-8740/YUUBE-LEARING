const express = require('express');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const { pool } = require('../db');

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 200 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowedAudio = ['audio/webm', 'audio/ogg', 'audio/wav', 'audio/mp3', 'audio/mpeg', 'audio/mp4'];
    const allowedVideo = ['video/webm', 'video/mp4', 'video/quicktime', 'video/x-msvideo', 'video/x-matroska'];
    const allowedExt = /\.(webm|ogg|wav|mp3|mp4|mov|avi|mkv)$/i;
    if (allowedAudio.includes(file.mimetype) || allowedVideo.includes(file.mimetype) || file.originalname.match(allowedExt)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid media format'), false);
    }
  }
});

router.post('/upload', upload.single('audio'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No media file uploaded' });
    if (!req.body.userId) return res.status(400).json({ error: 'userId is required' });

    const id = uuidv4();
    const audioBase64 = req.file.buffer.toString('base64');
    const duration = parseInt(req.body.duration) || 0;
    const mediaType = req.file.mimetype || 'audio/webm';

    const replyTo = req.body.reply_to || null;

    await pool.query(
      'INSERT INTO voice_recordings (id, user_id, audio_data, duration, file_size, reply_to, media_type) VALUES ($1, $2, $3, $4, $5, $6, $7)',
      [id, req.body.userId, audioBase64, duration, req.file.size, replyTo, mediaType]
    );

    const dataUrl = 'data:' + mediaType + ';base64,' + audioBase64;
    res.json({ id, duration, file_size: req.file.size, created_at: new Date().toISOString(), audio_url: dataUrl, media_type: mediaType });
  } catch (err) {
    console.error('Voice upload error:', err);
    res.status(500).json({ error: 'Upload failed' });
  }
});

router.get('/list', async (req, res) => {
  try {
    const userId = req.query.userId;
    let result;
    if (userId) {
      result = await pool.query(
        'SELECT id, user_id, audio_data, duration, file_size, receiver_id, reply_to, reactions, seen, created_at, media_type FROM voice_recordings WHERE user_id = $1 OR receiver_id = $1 ORDER BY created_at DESC',
        [userId]
      );
    } else {
      result = await pool.query(
      'SELECT id, user_id, audio_data, duration, file_size, receiver_id, reply_to, reactions, created_at, media_type FROM voice_recordings ORDER BY created_at DESC'
      );
    }
    const rows = result.rows.map(r => {
      const { audio_data, ...rest } = r;
      const mt = r.media_type || 'audio/webm';
      return { ...rest, audio_url: 'data:' + mt + ';base64,' + audio_data };
    });
    res.json(rows);
  } catch (err) {
    console.error('List voices error:', err);
    res.status(500).json({ error: 'Failed to list voices' });
  }
});

router.get('/admin/all', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, user_id, audio_data, duration, file_size, receiver_id, created_at, media_type FROM voice_recordings ORDER BY created_at DESC'
    );
    const rows = result.rows.map(r => {
      const { audio_data, ...rest } = r;
      const mt = r.media_type || 'audio/webm';
      return { ...rest, audio_url: 'data:' + mt + ';base64,' + audio_data };
    });
    res.json(rows);
  } catch (err) {
    console.error('Admin list voices error:', err);
    res.status(500).json({ error: 'Failed to list voices' });
  }
});

router.get('/user/:userId', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, user_id, audio_data, duration, file_size, reply_to, reactions, created_at, media_type FROM voice_recordings WHERE user_id = $1 ORDER BY created_at DESC',
      [req.params.userId]
    );
    const rows = result.rows.map(r => {
      const { audio_data, ...rest } = r;
      const mt = r.media_type || 'audio/webm';
      return { ...rest, audio_url: 'data:' + mt + ';base64,' + audio_data };
    });
    res.json(rows);
  } catch (err) {
    console.error('List user voices error:', err);
    res.status(500).json({ error: 'Failed to list voices' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const result = await pool.query('DELETE FROM voice_recordings WHERE id = $1 RETURNING id', [req.params.id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Recording not found' });
    }
    res.json({ success: true });
  } catch (err) {
    console.error('Delete voice error:', err);
    res.status(500).json({ error: 'Failed to delete voice' });
  }
});

router.post('/send', async (req, res) => {
  try {
    const { recordingId, senderId, receiverId } = req.body;
    if (!recordingId || !senderId || !receiverId) {
      return res.status(400).json({ error: 'recordingId, senderId, receiverId are required' });
    }
    const result = await pool.query(
      'UPDATE voice_recordings SET receiver_id = $1 WHERE id = $2 AND user_id = $3 RETURNING id',
      [receiverId, recordingId, senderId]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Recording not found or not owned by sender' });
    }
    res.json({ success: true, id: result.rows[0].id });
  } catch (err) {
    console.error('Send voice error:', err);
    res.status(500).json({ error: 'Failed to send voice pack' });
  }
});

router.post('/mark-seen', async (req, res) => {
  try {
    const { viewerId, partnerId } = req.body;
    if (!viewerId || !partnerId) {
      return res.status(400).json({ error: 'viewerId and partnerId are required' });
    }
    const result = await pool.query(
      'UPDATE voice_recordings SET seen = TRUE WHERE user_id = $1 AND receiver_id = $2 AND (seen IS NULL OR seen = FALSE) RETURNING id',
      [partnerId, viewerId]
    );
    res.json({ success: true, updated: result.rowCount });
  } catch (err) {
    console.error('Mark seen error:', err);
    res.status(500).json({ error: 'Failed to mark as seen' });
  }
});

router.post('/send-bulk', async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;
    if (!senderId || !receiverId) {
      return res.status(400).json({ error: 'senderId, receiverId are required' });
    }
    const result = await pool.query(
      'UPDATE voice_recordings SET receiver_id = $1 WHERE user_id = $2 AND receiver_id IS NULL RETURNING id',
      [receiverId, senderId]
    );
    res.json({ success: true, updated: result.rowCount });
  } catch (err) {
    console.error('Bulk send voice error:', err);
    res.status(500).json({ error: 'Failed to bulk send voice packs' });
  }
});

router.get('/conversation/:user1/:user2', async (req, res) => {
  try {
    const { user1, user2 } = req.params;
    const result = await pool.query(
      'SELECT id, user_id, duration, file_size, receiver_id, reply_to, reactions, seen, created_at, media_type FROM voice_recordings WHERE (user_id = $1 AND receiver_id = $2) OR (user_id = $2 AND receiver_id = $1) ORDER BY created_at ASC',
      [user1, user2]
    );
    res.json(result.rows);
  } catch (err) {
    console.error('Conversation error:', err);
    res.status(500).json({ error: 'Failed to get conversation' });
  }
});

router.get('/:id/audio', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, audio_data, duration, file_size, media_type FROM voice_recordings WHERE id = $1',
      [req.params.id]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Recording not found' });
    }
    const r = result.rows[0];
    const mt = r.media_type || 'audio/webm';
    res.setHeader('Cache-Control', 'private, max-age=3600');
    res.json({
      id: r.id,
      duration: r.duration,
      file_size: r.file_size,
      audio_url: 'data:' + mt + ';base64,' + r.audio_data
    });
  } catch (err) {
    console.error('Audio fetch error:', err);
    res.status(500).json({ error: 'Failed to get audio' });
  }
});

router.post('/:id/react', async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, emoji } = req.body;
    if (!userId || !emoji) {
      return res.status(400).json({ error: 'userId and emoji are required' });
    }

    const existing = await pool.query('SELECT reactions FROM voice_recordings WHERE id = $1', [id]);
    if (existing.rowCount === 0) {
      return res.status(404).json({ error: 'Recording not found' });
    }

    let reactions = {};
    try { reactions = JSON.parse(existing.rows[0].reactions) || {}; } catch(e) { reactions = {}; }

    if (!reactions[emoji]) reactions[emoji] = [];

    const idx = reactions[emoji].indexOf(userId);
    if (idx > -1) {
      reactions[emoji].splice(idx, 1);
      if (reactions[emoji].length === 0) delete reactions[emoji];
    } else {
      reactions[emoji].push(userId);
    }

    await pool.query('UPDATE voice_recordings SET reactions = $1 WHERE id = $2', [JSON.stringify(reactions), id]);
    res.json({ success: true, reactions });
  } catch (err) {
    console.error('React error:', err);
    res.status(500).json({ error: 'Failed to toggle reaction' });
  }
});

module.exports = router;
