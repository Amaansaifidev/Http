const http = require("http");
const myServer = http.createServer((res, request) => {
  console.log("new req");
  res.end("hello from server");
  
});
myServer.listen(8000, () => {
  console.log("server started")
  
})