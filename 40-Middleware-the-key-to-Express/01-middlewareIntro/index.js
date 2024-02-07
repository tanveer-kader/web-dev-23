const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("common"));

app.use((req, res, next) => {
  console.log("This is my first middleware");
  return next();
  console.log("This is my first middleware - after calling next");
});

app.use((req, res, next) => {
  console.log("This is my second middleware");
  return next();
});

app.use((req, res, next) => {
  console.log("This is my thirdreturn  middleware");
  return next();
});

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/dogs", (req, res) => {
  res.send("Woof Woof");
});

app.listen(8080, () => {
  console.log("App is running on 8080");
});
