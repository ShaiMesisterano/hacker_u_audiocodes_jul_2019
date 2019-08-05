const http = require('http');
const pid = process.pid;

http.createServer( (request, response) => {
    for (let i=0; i<10000000; i++) {

    };
    response.end(`Process ID: ${pid}`);
} ).listen(8000, () => console.log('Server is running...'));