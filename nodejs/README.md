Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

https://nodejs.org/dist/latest-v10.x/docs/api/index.html

- 全局对象

  ```js
  console.log("hello");
  setTimeout(() => {
    console.log("hello");
  }, 3000);

  var time = 0;
  var timer = setInterval(() => {
    time += 1;
    console.log("world");
    if (time > 2) {
      clearInterval(timer);
    }
  }, 1000);

  console.log(__filename);
  console.log(__dirname);
  ```

- 回调函数

  ```js
  function callFunction(str) {
    console.log("hello " + str);
  }

  function sayHello(callFunction, str) {
    callFunction(str);
  }

  sayHello(callFunction, "world");
  ```

- 模块

  - demo1.js

  ```js
  var counter = function(arr) {
    return `There are ${arr.length} elements in the array.`;
  };

  var adder = function(a, b) {
    return `The sum of the two numbers is ${a + b}`;
  };

  module.exports = {
    counter,
    adder
  };
  ```

  - demo2.js

  ```js
  var fun = require("./dem1");
  console.log(fun.counter([1, 2, 3]));
  console.log(fun.adder(1, 2));
  ```

- 事件

  ```js
  var event = require("events");
  class Emiter extends event {}
  var MyEmiter = new Emiter();
  MyEmiter.on("someEvent", function() {
    console.log("an event occurred !");
  });
  MyEmiter.emit("someEvent");
  ```

- 读写文件

  ```js
  var fs = require("fs");
  //同步
  var readFile = fs.readFileSync("./README.md", "utf8");
  fs.writeFileSync("./test.txt", readFile);
  fs.unlinkSync("./test.txt");
  //异步
  var readFile2 = fs.readFile("./README.md", "utf8", function(err, data) {
    fs.writeFile("./test.txt", data, function() {
      console.log("file has created");
      fs.unlink("./test.txt", function() {
        console.log("file has removed");
      });
    });
  });
  ```

- 流和管道

  提高文件读写性能

  ```js
  // https://nodejs.org/dist/latest-v10.x/docs/api/stream.html#stream_event_data
  var fs = require("fs");
  var myReadStream = fs.createReadStream(__dirname + "/README.md", "utf8");
  var myWriteStream = fs.createWriteStream((__dirname = "test.txt"));
  //流
  // myReadStream.on("data", function(thunk) {
  //   myWriteStream.write(thunk);
  // });
  //管道
  myReadStream.pipe(myWriteStream);
  ```

- web 服务器

  ```js
  var http = require("http");

  var obj = {
    name: "xnng",
    age: 18
  };
  var server = http.createServer(function(request, response) {
    console.log("request received");
    response.writeHead(200, { "Content-Type": "application/json" });
    // response.writeHead(200, { "Content-Type": "application/octet-stream" });
    response.write(JSON.stringify(obj));
    response.end();
  });

  server.listen(3000);
  console.log("servet start at http://localhost:3000");
  ```

- 路由

  访问：`http://localhost:3000` 和 `http://localhost:3000/api`

  ```js
  var http = require("http");

  var obj1 = {
    name: "xnng",
    age: 18
  };

  var obj2 = `<h1>hello world</h1>`;

  var server = http.createServer(function(request, response) {
    if (request.url === "/") {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(obj2);
    } else if (request.url === "/api") {
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify(obj1));
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end("<h1>404</h1>");
    }
  });

  server.listen(3000);
  console.log("servet start at http://localhost:3000");
  ```

- 获取 Get/Post 请求发送的数据

  - Get 请求

  访问：`http://localhost:3000/api?name=xnng&age=18`

  ```js
  var http = require("http");
  var url = require("url");

  var server = http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("request received" + pathname);
    var params = url.parse(request.url, true).query;
    response.writeHead(200, { "Conte  nt-Type": "application/json" });
    response.end(JSON.stringify(params));
  });

  server.listen(3000);
  console.log("servet start at http://localhost:3000");
  ```

  - Post 请求

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title></title>
    </head>
    <body>
      <form action="http://localhost:3000" method="post">
        <input type="text" name="name" value="" />
        <input type="password" name="password" value="" />
        <input type="submit" value="submit" />
      </form>
    </body>
  </html>
  ```

  ```js
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
  ```
