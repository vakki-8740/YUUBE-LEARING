const WebSocket = require('ws');
const users = {};
const activeCalls = {};

function setupRelay(server) {
  const wss = new WebSocket.Server({ server });
  console.log('WebSocket relay server started');

  wss.on('connection', (ws) => {
    let userId = null;

    ws.on('message', (data, isBinary) => {
      if (isBinary) {
        if (userId && activeCalls[userId]) {
          const target = activeCalls[userId];
          if (users[target] && users[target].readyState === WebSocket.OPEN) {
            users[target].send(data, { binary: true });
          }
        }
        return;
      }

      try {
        const msg = JSON.parse(data.toString());
        if (!msg.type) return;

        switch (msg.type) {
          case 'register':
            userId = msg.userId;
            users[userId] = ws;
            break;

          case 'call-start': {
            const target = msg.to;
            activeCalls[userId] = target;
            if (users[target] && users[target].readyState === WebSocket.OPEN) {
              users[target].send(JSON.stringify({
                type: 'call-start',
                from: userId,
                callType: msg.callType,
                userName: msg.userName
              }));
            }
            break;
          }

          case 'call-accept':
            activeCalls[msg.to] = userId;
            if (users[msg.to] && users[msg.to].readyState === WebSocket.OPEN) {
              users[msg.to].send(JSON.stringify({ type: 'call-accept', from: userId }));
            }
            break;

          case 'call-decline':
          case 'call-end':
            delete activeCalls[userId];
            if (users[msg.to] && users[msg.to].readyState === WebSocket.OPEN) {
              users[msg.to].send(JSON.stringify({ type: msg.type, from: userId }));
            }
            if (activeCalls[msg.to]) delete activeCalls[msg.to];
            break;
        }
      } catch (e) {
        console.error('WS message error:', e);
      }
    });

    ws.on('close', () => {
      if (userId) {
        if (activeCalls[userId]) {
          const target = activeCalls[userId];
          if (users[target] && users[target].readyState === WebSocket.OPEN) {
            users[target].send(JSON.stringify({ type: 'call-end', from: userId }));
          }
          delete activeCalls[target];
          delete activeCalls[userId];
        }
        delete users[userId];
      }
    });

    ws.on('error', () => {});
  });

  return wss;
}

module.exports = { setupRelay };
