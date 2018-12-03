// 全局对象
// console.log("hello");
// setTimeout(() => {
//   console.log("hello");
// }, 3000);
// var time = 0;
// var timer = setInterval(() => {
//   time += 1;
//   console.log("world");
//   if (time > 2) {
//     clearInterval(timer);
//   }
// }, 1000);
// console.log(__filename);
// console.log(__dirname);

//回调函数
// function callFunction(str) {
//   console.log("hello " + str);
// }
// function sayHello(callFunction, str) {
//   callFunction(str);
// }
// sayHello(callFunction, "world");

//模块
// var fun = require("./demo2");
// console.log(fun.counter([1, 2, 3]));
// console.log(fun.adder(1, 2));

//事件
// var event = require("events");
// class Emiter extends event {}
// var MyEmiter = new Emiter();
// MyEmiter.on("someEvent", function() {
//   console.log("an event occurred !");
// });
// MyEmiter.emit("someEvent");

//读写文件
// var fs = require("fs");
//同步
// var readFile = fs.readFileSync("./README.md", "utf8");
// fs.writeFileSync("./test.txt", readFile);
// fs.unlinkSync("./test.txt");
//异步
// var readFile2 = fs.readFile("./README.md", "utf8", function(err, data) {
//   fs.writeFile("./test.txt", data, function() {
//     console.log("file has created");
//     fs.unlink("./test.txt", function() {
//       console.log("file has removed");
//     });
//   });
// });

//流和管道
// https://nodejs.org/dist/latest-v10.x/docs/api/stream.html#stream_event_data
// var fs = require("fs");
// var myReadStream = fs.createReadStream(__dirname + "/README.md", "utf8");
// var myWriteStream = fs.createWriteStream((__dirname = "test.txt"));
// // myReadStream.on("data", function(thunk) {
// //   myWriteStream.write(thunk);
// // });
// myReadStream.pipe(myWriteStream)

//web 服务器
// var http = require("http");
// var obj = {
//   name: "xnng",
//   age: 18
// };
// var server = http.createServer(function(request, response) {
//   console.log("request received");
//   response.writeHead(200, { "Content-Type": "application/json" });
//   // response.writeHead(200, { "Content-Type": "application/octet-stream" });
//   response.write(JSON.stringify(obj));
//   response.end();
// });
// server.listen(3000);
// console.log("servet start at http://localhost:3000");

//路由
// var http = require("http");
// var obj1 = {
//   name: "xnng",
//   age: 18
// };
// var obj2 = `<h1>hello world</h1>`;
// var server = http.createServer(function(request, response) {
//   if (request.url === "/") {
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.end(obj2);
//   } else if (request.url === "/api") {
//     response.writeHead(200, { "Content-Type": "application/json" });
//     response.end(JSON.stringify(obj1));
//   } else {
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.end("<h1>404</h1>");
//   }
// });
// server.listen(3000);
// console.log("servet start at http://localhost:3000");

//获取 Get/Post 请求发送的数据
// var http = require("http");
// var url = require("url");
// var server = http.createServer(function(request, response) {
//   var pathname = url.parse(request.url).pathname;
//   console.log("request received" + pathname);
//   var params = url.parse(request.url, true).query;
//   response.writeHead(200, { "Content-Type": "text/json" });
//   response.end(JSON.stringify(params));
// });
// server.listen(3000);
// console.log("servet start at http://localhost:3000");

//
var http = require("http");
var queryString = require("querystring");

var server = http.createServer(function(request, response) {
  var currentData = "";
  request.on("data", function(data) {
    currentData += data;
    response.writeHead(200, { ContentType: "text/json;charset=utf-8" });
    response.end(JSON.stringify(queryString.parse(currentData)));
  });
});

server.listen(3000);
console.log("servet start at http://localhost:3000");
