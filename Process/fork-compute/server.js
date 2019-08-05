const http = require('http');
const { fork } = require('child_process');

http.createServer( (request, response) => {
    console.log("before fork");
    const compute = fork('compute.js');
    console.log("after fork");
    compute.send('begin');
    compute.on('message', sum => response.end('Sum is: ' + sum));
} ).listen(3000);