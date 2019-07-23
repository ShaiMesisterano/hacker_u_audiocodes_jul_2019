const fs = require('fs');
const util = require('util');

const promisify = util.promisify;

const readFilePromisify = promisify(fs.readFile);

readFilePromisify('log.txt', 'utf8')
.then( data => console.log(data) )
.catch(err => console.error(err) );


// function readFilePromise(filename, encoding) {
//     return new Promise( (resolve, reject) => {
//         fs.readFile(filename, encoding, (error, data) => {
//             if (error) return reject(error);
    
//             resolve(data);
//          });
//     } )
    
// }

// readFilePromise('log.txt', 'utf8')
// .then(data => console.log(data))
// .catch(err => console.error(err));

// (async () => {
//     try{
//         const data = await readFilePromise('log.txt', 'utf8');
//         console.log(data);
//     }
//     catch(err) {
//         console.error(err);
//     }
// })();