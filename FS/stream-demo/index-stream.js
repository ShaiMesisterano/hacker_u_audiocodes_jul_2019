const fs = require('fs');

const stream = fs.createReadStream('file.zip');

console.time('stream experiment');
stream.on('data', (buffer) => {
    console.log(buffer);
}).on('close', () => {
    console.timeEnd('stream experiment');
});