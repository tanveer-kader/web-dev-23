const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("common"));

app.use((req, res, next) => {
  // req.method = "GET";
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});

app.use("/dogs", (req, res, next) => {
  console.log("I love dogs");
  next();
});

const verifyPassword = (req, res, next) => {
  // console.log(req.query);
  const { password } = req.query;
  if (password === "chickennugget") {
    next();
  }
  // res.send("Sorry you need password");
  throw new Error("Password required");
};

app.get("/", (req, res) => {
  console.log(`Request date: ${req.requestTime}`);
  res.send("Home Page");
});

app.get("/error", (req, res) => {
  chicken.fly();
});

app.get("/dogs", (req, res) => {
  console.log(`Request date: ${req.requestTime}`);
  res.send("Woof Woof");
});

app.get("/secret", verifyPassword, (req, res) => {
  res.send(
    "My secret is: Sometimes I wear headphones in public so I don't have to talk to anyone"
  );
});

app.use((req, res) => {
  res.status(404).send("Not Found");
});

app.listen(8080, () => {
  console.log("App is running on 8080");
});
