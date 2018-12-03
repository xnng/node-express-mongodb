var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  res.send("路由中间件-users");
});

module.exports = router;