const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const Gallery = require('./modules/Gallery');
const indexRouter = require('./routers/index');
const userRouter = require('./routers/user');

const port = 8000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(bodyParser.urlencoded());
app.use(session({ secret: 'mySecret' }));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/user', userRouter);

const gallery = new Gallery('https://dog.ceo/api/breeds/image/random', io, 3, 10000);

io.on('connection', socket => {
    gallery.start();
    socket.on('vote', msg => gallery.vote(msg));
})

server.listen(port, () => console.log(`Server is running on port ${port}`))