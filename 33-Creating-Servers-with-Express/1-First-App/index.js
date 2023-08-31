const express = require("express");
const app = express();

// console.dir(app);

app.use((req, res) => {
  console.log("We got a new request");
  // console.dir(req);
  // res.send("hello we got your request");
  // res.send({ color: "red" });
  res.send("<h1>This is my webpage</h1>");
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
