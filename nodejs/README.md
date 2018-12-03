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
