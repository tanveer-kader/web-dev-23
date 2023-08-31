const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("This is homepage");
});

app.post("/cats", (req, res) => {
  // console.log("cat request");
  res.send("post request. This is different than get request");
});

app.get("/cats", (req, res) => {
  // console.log("cat request");
  res.send("meow");
});

app.get("/dogs", (req, res) => {
  res.send("woof");
});

app.get("*", (req, res) => {
  res.send("I don't know that path");
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
