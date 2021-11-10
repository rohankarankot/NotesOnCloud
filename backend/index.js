const express = require("express");
const connectToMongoose = require("./db");
connectToMongoose();
const app = express();
const port = 5000;
app.get("/", (req, res) => {
  res.send("Hello rohan!");
});
app.get("/about", (req, res) => {
  res.send("Hello About!");
});
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
