const express = require('express');
const router = express.Router();
const { query } = require('../db');
const https = require('https');

router.get('/status', async (req, res) => {
  try {
    const result = await query("SELECT value FROM app_config WHERE key = 'app_enabled'");
    const enabled = result.rows.length > 0 ? result.rows[0].value === 'true' : true;
    res.json({ enabled });
  } catch (err) {
    console.error('Error fetching app status:', err);
    res.json({ enabled: true });
  }
});

router.post('/toggle', async (req, res) => {
  try {
    const { enabled } = req.body;
    if (typeof enabled !== 'boolean') {
      return res.status(400).json({ error: 'enabled must be a boolean' });
    }
    await query(
      "INSERT INTO app_config (key, value, updated_at) VALUES ('app_enabled', $1, CURRENT_TIMESTAMP) ON CONFLICT (key) DO UPDATE SET value = $1, updated_at = CURRENT_TIMESTAMP",
      [enabled ? 'true' : 'false']
    );
    res.json({ enabled });
  } catch (err) {
    console.error('Error toggling app status:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/notify-online', (req, res) => {
  try {
    const { userId, userName } = req.body;
    if (!userId) return res.status(400).json({ error: 'userId is required' });

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (!botToken || !chatId) {
      return res.json({ success: true, note: 'Telegram not configured' });
    }
    const text = encodeURIComponent(
      '\u{1F7E2} User Online\n\u{1F464} User: ' + (userName || 'Unknown') + '\n\u{1F194} ID: ' + userId + '\n\u{23F0} Time: ' + new Date().toLocaleString('en-IN')
    );

    https.get('https://api.telegram.org/bot' + botToken + '/sendMessage?chat_id=' + chatId + '&text=' + text, (apiRes) => {
      let data = '';
      apiRes.on('data', chunk => data += chunk);
      apiRes.on('end', () => {
        try {
          const j = JSON.parse(data);
          if (!j.ok) console.error('Telegram API error:', j);
        } catch (e) {}
      });
    }).on('error', err => console.error('Telegram request error:', err));

    res.json({ success: true });
  } catch (err) {
    console.error('Notify online error:', err);
    res.status(500).json({ error: 'Failed to send notification' });
  }
});

module.exports = router;
