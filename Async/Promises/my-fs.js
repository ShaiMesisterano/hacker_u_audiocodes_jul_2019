const fs = require("fs");

const readFile = filename => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf8", (err, body) => {
      try {
        if (err) reject(err);
        else resolve(body);
      }
      catch(ex) {
        reject(ex);
      }
    });
  });
};

const writeFile = (filename, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, content, (err, body) => {
      if (err) reject(err);
      else resolve(body);
    });
  });
};

const appendFile = (filename, content) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(filename, content, (err, body) => {
      if (err) reject(err);
      else resolve(body);
    });
  });
};

const deleteFile = filename => {
  return new Promise((resolve, reject) => {
    fs.unlink(filename, (err, body) => {
      if (err) reject(err);
      else resolve(body);
    });
  });
};

module.exports = {
  readFile,
  writeFile,
  appendFile,
  deleteFile
};
