const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello from backend');
});

server.listen(3000, () => {
    console.log("App working on port 3000");
});

