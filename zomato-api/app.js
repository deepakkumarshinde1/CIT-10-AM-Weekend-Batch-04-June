// entry final
// import express or 3rd party package

// call express
const createError = require("http-errors");
const express = require("express");
const RouterAPI = require("./Routes/RouterAPI");

// create instance of express
const app = express(); // server is created

// express come with routing
// routing are handel with http or https
// http or https are having methods which can handel the request and response
//app.get(),
//app.post();
//app.put();
//app.delete()

// routing middleware
app.use("/", RouterAPI); // use() is use to inject external modules ==> middleware

// 404 page not found
app.use((req, res, next) => {
  return next(createError(404));
});

// error handler
app.use((error, request, response, next) => {
  let status = error.status || 500;
  response.status(status).send({
    status: false,
    code: status,
    message: error.message,
  });
});
// set a port number
const PORT = 4004; // 3000 (react)
app.listen(PORT, () => {
  console.log("project is running on port ", PORT);
});
