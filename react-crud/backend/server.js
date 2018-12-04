import express from "express";

const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("\n\nHello, world!\n\n");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
