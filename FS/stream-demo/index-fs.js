const fs = require('fs');

// read file using 'fs' module
console.time('stream experiment - readFile');
fs.readFile('file.zip', (error, data) => {
    console.log(data);
    console.timeEnd('stream experiment - readFile');
 } );