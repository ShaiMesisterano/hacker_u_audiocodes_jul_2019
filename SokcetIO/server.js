const express = require('express');
const app = express();
const path = require('path');
const server = require('http').Server(app);
const io = require('socket.io')(server);
const eventNames = ['chat message', 'join'];
const port = 3000;

app.use('/', express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    socket.on(eventNames[0], msg => {
        // console.log('message was sent', msg);
        io.emit(eventNames[0], {
            author: socket.id,
            text: msg
        })
    });

    socket.on(eventNames[1], joined => {
        console.log('joined', joined);
    });
});

server.listen(port, () => console.log(`Server is running on port ${port}`))