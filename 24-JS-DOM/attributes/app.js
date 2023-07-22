/* **************
attributes selector
 **************** */

const banner = document.querySelector("#banner");

banner.id = "woops";
banner.id = "banner";

const source = document.querySelector("#banner").src;

const link = document.querySelector("a").href;
const title = document.querySelector("a").title;

/* **************
attributes selector
gets value from direct html
 **************** */

const firstLink = document.querySelector("a").getAttribute("href");
const firsttitle = document.querySelector("a").getAttribute("title");

/* **************
set attribute
 **************** */
document.querySelector("a").setAttribute("href", "http://www.google.com");

const newLink = document.querySelector("a").getAttribute("href");

const input = document.querySelector('input[type="text"]');

input.type = "password";
input.type = "color";
input.setAttribute("type", "text");
