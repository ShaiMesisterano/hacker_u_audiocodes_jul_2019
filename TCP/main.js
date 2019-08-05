const server = require('net').createServer();
const port = 8000;
let counter = 0;
let sockets = {};

server.on('connection', socket => {
    socket.id = counter++;

    console.log('Client connected');

    socket.write('Please enter your name: ');

    socket.on('data', data => {
        // New user
        if (!sockets[socket.id]) {
            socket.name = data.toString().replace('\n', '');
            socket.write(`Welcome ${socket.name}\n`);
            sockets[socket.id] = socket;
            return;
        }
        // Existing user
        Object.entries(sockets).forEach( ([key, value]) => {
            console.log(typeof key, typeof socket.id);
            if (+socket.id === +key) return;

            value.write(`${socket.name}: ${data}`);
        })
    });

    socket.on('end', () => {
        delete sockets[socket.id];
        console.log('Client disconnected')
    })
})

server.listen(port, () => console.log(`Server is running on port ${port}`));