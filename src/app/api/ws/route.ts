export function SOCKET(
  client: import('ws').WebSocket,
  _request: import('http').IncomingMessage,
  _server: import('ws').WebSocketServer
) {
  client.on('message', (message) => {
    client.send(message);
  });

  client.on('close', () => {});
}
