const WebSocket = require('ws');

function setupRelay(server) {
  const wss = new WebSocket.Server({ server });
  console.log('WebSocket relay server started (standby)');

  wss.on('connection', () => {});
  wss.on('error', () => {});

  return wss;
}

module.exports = { setupRelay };
