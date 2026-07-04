const express = require('express');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const { pool } = require('../db');

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = ['audio/webm', 'audio/ogg', 'audio/wav', 'audio/mp3', 'audio/mpeg', 'audio/mp4'];
    if (allowed.includes(file.mimetype) || file.originalname.match(/\.(webm|ogg|wav|mp3|mp4)$/i)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid audio format'), false);
    }
  }
});

router.post('/upload', upload.single('audio'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No audio file uploaded' });
    if (!req.body.userId) return res.status(400).json({ error: 'userId is required' });

    const id = uuidv4();
    const audioBase64 = req.file.buffer.toString('base64');
    const duration = parseInt(req.body.duration) || 0;

    await pool.query(
      'INSERT INTO voice_recordings (id, user_id, audio_data, duration, file_size) VALUES ($1, $2, $3, $4, $5)',
      [id, req.body.userId, audioBase64, duration, req.file.size]
    );

    res.json({ id, duration, file_size: req.file.size, created_at: new Date().toISOString() });
  } catch (err) {
    console.error('Voice upload error:', err);
    res.status(500).json({ error: 'Upload failed' });
  }
});

router.get('/list', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, user_id, audio_data, duration, file_size, created_at FROM voice_recordings ORDER BY created_at DESC'
    );
    const rows = result.rows.map(r => {
      const { audio_data, ...rest } = r;
      return { ...rest, audio_url: 'data:audio/webm;base64,' + audio_data };
    });
    res.json(rows);
  } catch (err) {
    console.error('List voices error:', err);
    res.status(500).json({ error: 'Failed to list voices' });
  }
});

router.get('/user/:userId', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, user_id, audio_data, duration, file_size, created_at FROM voice_recordings WHERE user_id = $1 ORDER BY created_at DESC',
      [req.params.userId]
    );
    const rows = result.rows.map(r => {
      const { audio_data, ...rest } = r;
      return { ...rest, audio_url: 'data:audio/webm;base64,' + audio_data };
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

module.exports = router;
