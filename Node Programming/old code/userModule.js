// native modules
// http ==> Create server
// fs ==> Files handling
const http = require("http");
const fs = require("fs");
//  instance of server

let server = http.createServer((request, response) => {
  fs.readFile("./index.html", (error, data) => {
    if (error) {
      response.write("Unable read file");
    } else {
      response.write(data);
    }
    response.end();
  });
});
module.exports = server;
