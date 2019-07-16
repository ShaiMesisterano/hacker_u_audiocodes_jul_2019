const fs = require('fs');

// read file using 'fs' module
console.time('stream experiment - readFile');
fs.readFile('file3.zip', (error, data) => {
    console.timeEnd('stream experiment - readFile');
    // console.log(data);
 } );