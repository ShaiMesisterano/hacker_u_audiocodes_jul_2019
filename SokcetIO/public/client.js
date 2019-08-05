const socket = io();
const eventNames = ['chat message', 'join'];

const message = document.getElementById('message');
const send = document.getElementById('send');
const messages = document.getElementById('messages');

send.addEventListener('click', () => {
    socket.emit(eventNames[0], message.value);
});

socket.on(eventNames[0], msg => {
    const {author,text} = msg;
    messages.innerHTML += `${author}: ${text}<br><br>`
});