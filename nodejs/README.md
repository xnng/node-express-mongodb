Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

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


