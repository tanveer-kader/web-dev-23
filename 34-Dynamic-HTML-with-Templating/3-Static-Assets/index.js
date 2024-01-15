const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json");

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
// make it work from any dir
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/cats", (req, res) => {
  const cats = ["Blue", "Rocket", "Monty", "Stephanie", "Winston"];
  res.render("cats", { cats });
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  // console.log(data);
  // res.render("subreddit", { subreddit });
  if (data) {
    res.render("subreddit", { ...data });
  } else {
    res.render("notfound", { subreddit });
  }
});

// random number routing
app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  // pass obj as key value pairs
  res.render("random", { rand: num });
  // pass as key and value are same
  // res.render("random", { num });
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
