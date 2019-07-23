const http = require('http');
const fs = require('fs');

const html = fs.readFileSync('../client/index.html');

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(html);
}).listen(5000);