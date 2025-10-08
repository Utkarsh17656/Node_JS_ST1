const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/user' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const user = {
      name: 'Amit',
      age: 25
    };

    res.end(JSON.stringify(user));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
