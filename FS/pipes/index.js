const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const filename = path.join(__dirname, 'lorem.txt');
const outputFilename = path.join(__dirname, 'ouput.gz')

fs.createReadStream(filename)
// .pipe(process.stdout)
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream(outputFilename))
.on('finish', () => console.log('File was zipped'));