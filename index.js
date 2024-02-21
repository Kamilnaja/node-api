const http = require("http");
const port = require("./config");
const { readFiles } = require("./file-reader");

readFiles();

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hello World! 4</h1>");
    res.end();
  })
  .listen(port);
