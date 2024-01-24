const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuid } = require("uuid");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let comments = [
  {
    id: uuid(),
    username: "Todd",
    comment: "lol that is so funny",
  },
  {
    id: uuid(),
    username: "Skayler",
    comment: "I like to go birdwatching with my dog",
  },
  {
    id: uuid(),
    username: "Sk8erBoi",
    comment: "Please delete your account, Todd",
  },
  {
    id: uuid(),
    username: "onlysaywoof",
    comment: "woof woof woof",
  },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new", { comments });
});

app.post("/comments", (req, res) => {
  // console.log(req.body);
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  // res.send("IT Worked!");
  res.redirect("/comments");
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/show", { comment });
});

app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/edit", { comment });
});

app.patch("/comments/:id", (req, res) => {
  // res.send("Updating something");
  const { id } = req.params;
  const newCommentText = req.body.comment;
  const foundComment = comments.find((c) => c.id === id);
  foundComment.comment = newCommentText;
  res.redirect("/comments");
});

app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  comments = comments.filter((c) => c.id !== id);
  res.redirect("/comments");
});

////////////////////////////
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
