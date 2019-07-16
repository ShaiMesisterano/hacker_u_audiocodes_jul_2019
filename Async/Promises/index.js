const { readFile, writeFile } = require("./my-fs");

readFile("log123.txt")
  .then(body => {
    console.log("reading file...");
    console.log(body);
    return body;
  })
  .catch(err => console.log("Error while reading file: ", err))
  .then(body => {
    console.log("writing file...");
    return writeFile("log2.txt", body);
  })
  .then(body => {
    console.log("end of operation");
  })
  .catch(err => console.log("Error occured: ", err))