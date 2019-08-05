const { spawn } = require('child_process');

// const child = spawn('find', ['.', '-type', 'f']);
const child = spawn('node', ['/Users/shaimesisterano/Documents/hackerU/hacker_u_audiocodes_jul_2019/Node Basics/http-server.js']);

child.stdout.on('data', data => console.log(`child stdout:\n${data}`));

child.stderr.on('data', data => console.log(`child stderr:\n${data}`));

child.on('exit', (code, signal) => {
    console.log(`Child Process exited with code ${code}, signal: ${signal}`);
})