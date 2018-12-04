var mongoose = require("mongoose");

mongoose.connect("mongodb://ali.xnngs.cn:27017/test");

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  item: String
});

var test = mongoose.model("test", todoSchema);

var insertItem = test({ item: "buy flowers" }).save(function(err) {
  if (err) throw err;
  console.log("item saved");
});
