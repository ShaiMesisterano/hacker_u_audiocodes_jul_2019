const fs = require('fs');

const filename = 'lorem.txt';
// const data = fs.readFileSync('lorem.txt');
// console.log(data.toString());

// console.time('fs-experiment');
// fs.readFile(filename, (err, data) => {
    // if (err) console.error(err);

    // console.log(data.toString());
    
    // console.timeEnd('fs-experiment');
// });

// console.log("Last line");

// console.time('fs-experiment');
// const stream = fs.createReadStream(filename);
// stream.on('data', chunk => chunk);
// stream.on('close', () => console.timeEnd('fs-experiment'));

// const hebFileName = "hebrew.txt";
// const hebStream = fs.createReadStream(hebFileName)
// hebStream.on('data', chunk => console.log(chunk.toString()));
// hebStream.on('close', () => console.log('end of stream'));