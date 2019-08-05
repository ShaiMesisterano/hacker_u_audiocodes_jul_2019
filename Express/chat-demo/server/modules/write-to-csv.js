const fs = require('fs');

const writeToCsv = record => {
    fs.appendFile('logs.csv', record, (err, result) => {
        if (err) return console.error(err);

        console.log('Success');
    })
}

module.exports = writeToCsv;