var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");

// 文件上传
var multer = require("multer");
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, __dirname + "/uploads");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});
var upload = multer({ storage: storage });

var app = express();
// 中间件，处理 post 提交的 json 格式的数据 (application/json)
var jsonParser = bodyParser.json();
// 中间件，处理 post 提交的 普通表单数据 (application/x-www-form-urlencoded)
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// 路由参数
// http://localhost:3000/test/123
app.get("/test/:id", function(req, res) {
  res.send(req.params.id);
});

//查询字符串
// http://localhost:3000/?a=b
app.get("/", function(req, res) {
  res.send(req.query.a);
});

//普通表单的 post 请求
app.post("/", urlencodedParser, function(req, res) {
  res.send(req.body);
});

app.get("/form", function(req, res) {
  var form = fs.readFileSync("./form.html", { encoding: "utf8" });
  res.send(form);
});

app.post("/upload", upload.single("file"), function(req, res) {
  res.send("upload successed");
});

app.listen(3000);
console.log("server start at http://localhost:3000");
