const franc = require("franc");
const langs = require("langs");
const colors = require("colors");

const langCode1 = franc("Alle menslike wesens word vry");
const langCode2 = franc("এটি একটি ভাষা একক IBM স্ক্রিপ্ট");

const language1 = langs.where("3", langCode1);
const language2 = langs.where("3", langCode2);
console.log(language1.name);
console.log(language2.name);

// take any language input

const input = process.argv[2];
const langCode = franc(input);

if (langCode === "und") {
  console.log("Sorry, couldn't figure it out!".red);
} else {
  const language = langs.where("3", langCode);
  console.log(`Our best guess is: ${language.name}`.green);
}
