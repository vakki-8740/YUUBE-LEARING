require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { initDb, isDbReady } = require('./db');
const voicePacksRouter = require('./routes/voicePacks');
const imagesRouter = require('./routes/images');
const voicesRouter = require('./routes/voices');
const videosRouter = require('./routes/videos');
const appControlRouter = require('./routes/appControl');

const { setupRelay } = require('./relay');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/uploads', (req, res, next) => {
  res.setHeader('Content-Disposition', 'inline');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  next();
});
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.static(path.join(__dirname, '..', 'public')));

// Mount routes — they'll handle DB unavailable gracefully
app.use('/api/voice-packs', voicePacksRouter);
app.use('/api/images', imagesRouter);
app.use('/api/voices', voicesRouter);
app.use('/api/videos', videosRouter);
app.use('/api/admin', appControlRouter);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', db: isDbReady() ? 'connected' : 'unavailable' });
});

async function start() {
  await initDb();
  const server = app.listen(PORT, '0.0.0.0', () => {
    console.log('Server running on port ' + PORT);
  });
  setupRelay(server);
}

start();
