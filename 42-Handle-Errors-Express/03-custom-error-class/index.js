const express = require("express");
const app = express();
const morgan = require("morgan");

const AppError = require("./AppError");

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
  // res.status(401);
  throw new AppError("Password required", 401);
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

app.get("/admin", (req, res) => {
  throw new AppError("Youre not an Admin", 403);
});

app.use((req, res) => {
  res.status(404).send("Not Found");
});

// app.use((err, req, res, next) => {
//   console.log("********************");
//   console.log("********ERROR*******");
//   console.log("********************");
//   // res.status(500).send("We got an ERROR");
//   console.log(err);
//   next(err);
// });

app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong" } = err;
  res.status(status).send(message);
});

app.listen(8080, () => {
  console.log("App is running on 8080");
});
