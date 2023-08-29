const fs = require("fs");
const folderName = process.argv[2] || "Project";

// async version

fs.mkdir("Dogs", { recursive: true }, (err) => {
  console.log("in callback");
  if (err) throw err;
});
console.log("I come after");

// sync version

fs.mkdirSync("cats", { recursive: true }, (err) => {
  console.log("in callback");
  if (err) throw err;
});
console.log("I come after");

// making a project boilerplate

try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`, "");
  fs.writeFileSync(`${folderName}/app.js`, "");
  fs.writeFileSync(`${folderName}/styles.css`, "");
} catch (e) {
  console.log("Something went wrong!");
  console.log(e);
}
