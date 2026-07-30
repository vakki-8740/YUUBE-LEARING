const WebSocket = require('ws');

function setupRelay(server) {
  const wss = new WebSocket.Server({ server });
  console.log('WebSocket relay server started');

  wss.on('connection', (ws) => {
    ws.on('error', () => {});
    ws.on('close', () => {});
  });

  wss.on('error', (err) => {
    console.error('WebSocket server error:', err.message);
  });

  return wss;
}

module.exports = { setupRelay };
