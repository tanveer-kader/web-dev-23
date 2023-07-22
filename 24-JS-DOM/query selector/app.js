/* *************
querySelector
selects only first match
**************** */
const paragraph = document.querySelector("p");
const banner = document.querySelector("#banner");
const squarePhoto = document.querySelector(".square");

const paragraph2 = document.querySelector("p:nth-of-type(2)");

const linkTitleJava = document.querySelector("a[title='Java']");

/* *************
querySelectorAll
selects all
**************** */
const paragraphAll = document.querySelectorAll("p");

const linkAll = document.querySelectorAll("a");

const linkInParagraphs = document.querySelectorAll("p a");

for (let link of linkAll) {
  console.log(link.href);
}
