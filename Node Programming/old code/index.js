const server = require("./userModule"); //  call custom module
server.listen(3000, function () {
  console.log("server is running on port 3000");
});
