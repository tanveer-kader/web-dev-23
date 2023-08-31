const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("This is homepage");
});

// // matching a general pattern

app.get("/r/:subreddit", (req, res) => {
  console.log(req.params);
  res.send("This is a subreddit");
});

// matching a general pattern specifing the subreddit

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>This is a ${subreddit} subreddit<h1>`);
});

// matching a general pattern specifing the subreddit with some other path also

app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(
    `<h1>Viewing Post ID: ${postId} is on the  ${subreddit} subreddit<h1>`
  );
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

//////////////////
// url with query

app.get("/search", (req, res) => {
  const { q } = req.query;
  console.log(q);
  res.send("hi");
});

// url with query, responding search results, handling missing query

app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send("Nothing found if nothing searched");
  }
  res.send(`<h1>Search results for: ${q}</h1>`);
});

app.get("*", (req, res) => {
  res.send("I don't know that path");
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
