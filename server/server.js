const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 });

let jogadores = [];

wss.on('connection', (ws) => {
  ws.on('message', (msg) => {
    jogadores.forEach((j) => {
      if (j !== ws) j.send(msg); // envia a todos menos o próprio
    });
  });

  ws.on('close', () => {
    jogadores = jogadores.filter(j => j !== ws);
  });

  jogadores.push(ws);
});

console.log('Servidor WebSocket rodando em ws://localhost:3000');
