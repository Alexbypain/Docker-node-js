const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Mi primer programa de Docker');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}/`);
});