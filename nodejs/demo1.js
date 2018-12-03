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
