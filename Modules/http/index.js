const http = require('http');

const endpoint = "www.google.com";

const req = http.request({hostname: endpoint}, response => {
    console.log('headers', response.headers);

    response.on('data', data => console.log(data.toString()));
})

req.end();