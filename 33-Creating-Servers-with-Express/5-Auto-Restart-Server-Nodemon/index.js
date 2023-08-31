const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("This is homepage");
});

//////////////////
// url with query

// app.get("/search", (req, res) => {
//   const { q } = req.query;
//   console.log(q);
//   res.send("hi");
// });

// url with query, responding search results, handling missing query

app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send("Nothing found if nothing searched!");
  }
  res.send(`<h1>Search results for: ${q}</h1>`);
});

app.get("*", (req, res) => {
  res.send("I don't know that path");
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
