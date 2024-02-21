// read all files from files
const fs = require("fs");
const { filesFolder } = require("./config");

const folderName = filesFolder;

function readFiles() {
  fs.readdir(folderName, (err, succ) => {
    console.log(succ);
  });
}

module.exports = { readFiles };
