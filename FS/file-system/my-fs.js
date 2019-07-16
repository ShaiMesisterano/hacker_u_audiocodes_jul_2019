const fs = require('fs');

const callback = (err, body) => {
    if (err) return null;

    console.log(body);
};

const readFile = filename => {
    fs.readFile(filename, 'utf8', callback)
};

const writeFile = (filename, content) => {
    fs.writeFile(filename, content, callback);
};

const appendFile = (filename, content) => {
    fs.appendFile(filename, content, callback);
};

const deleteFile = filename => {
    fs.unlink(filename, callback);
};

module.exports = {
    readFile,
    writeFile,
    appendFile,
    deleteFile
}