const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/tacos", (req, res) => {
  res.send("Get /tacos response");
});

app.post("/tacos", (req, res) => {
  // console.log(req.body);
  const { meat, qty } = req.body;
  res.send(`Post /tacos response, here ${meat} ${qty}`);
});

app.listen(8080, () => {
  console.log("On Port 8080!");
});
