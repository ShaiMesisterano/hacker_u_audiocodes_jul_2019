const server = require('http').createServer();
const fs = require('fs');

const routes = {
    '/home': (res) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(fs.readFileSync('./index.html'));
    },

    '/': (res) => {
        res.writeHead(301, { 'Location': '/home'});
        res.end();
    },

    '/api': (res) => {    
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://127.0.0.1:5000'
        });
        const data = { message: 'Hello There' };
        res.end(JSON.stringify(data));
    }
}

const notFoundResponse = (res) => {
    res.writeHead(404);
    res.end();
}

const routeHandler = (route) => (
    // !!routes[route] ? routes[route] : notFoundResponse
    routes[route] || notFoundResponse
)

server.on('request', (req, res) => {
    const route = routeHandler(req.url);
    route(res);
});

server.listen(5000);