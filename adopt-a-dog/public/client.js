(async () => {
    await initUsername();
    initSocket();
})();


async function initUsername() {
    const response = await fetch('/user');
    const username = await response.text();
    document.getElementById('username').innerText = `Hello ${username}`;
}

function initSocket() {
    console.log('initSocket')
    const socket = io();

    socket.on('file', file => {
        console.log('emit file');
        toggleButtonsEnablement(false);
        document.getElementById('dogPic').src = file.url;
    });

    socket.on('counter', counter => {
        document.getElementById('counter').innerText = counter;
    });

    document.getElementById('btnAdopt').addEventListener('click', () => {
        toggleButtonsEnablement(true);
        socket.emit('vote', { type: 'adopt' });
    });

    document.getElementById('btnDrop').addEventListener('click', () => {
        toggleButtonsEnablement(true);
        socket.emit('vote', { type: 'drop' });
    });
}

function toggleButtonsEnablement(disabled) {
    document.getElementById('btnAdopt').disabled = disabled;
    document.getElementById('btnDrop').disabled = disabled;
}