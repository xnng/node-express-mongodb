const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://root:root@ali.xnngs.cn:27017/test?authSource=admin"
);

const db = mongoose.connection;
db.on("error", err => {
  console.log(err);
});

db.once("open", () => {
  console.log("-----------" + "we're connected!");

  var mySchema = new mongoose.Schema({
    name: String,
    date: Date
  });

  var user = mongoose.model("user", mySchema);
  // 1、插入数据
  user.create(
    { name: "xnng", date: new Date() },
    { name: "gnnx", date: new Date() },
    (err, doc1, doc2) => {
      console.log("-----------" + doc1, doc2);
      // 2、更新数据
      user.update(
        { name: "xnng" },
        { $set: { date: "2020-01-01" } },
        { multi: true },
        (err, updateDoc) => {
          console.log("-----------" + updateDoc);
          // 3、删除数据
          user.remove({ name: "gnnx" }, (err, removeDoc) => {
            console.log("-----------" + removeDoc);
            // 4、查询数据
            user.find({ name: "xnng" }, (err, findDoc) => {
              console.log("-----------" + findDoc);
            });
          });
        }
      );
    }
  );
});
