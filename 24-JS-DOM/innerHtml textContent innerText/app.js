/* *************
innerText
all that are displayed on webpage will show up
**************** */
const paragraph = document.querySelector("p").innerText;

// document.querySelector("p").innerText = "loll";

const allLinks = document.querySelectorAll("a");
for (let link of allLinks) {
  link.innerText = "I am a Link!!";
}

document.querySelector("h1").innerText = "<i>hhkhsh</i>";

/* *************
inner html
shows full contents including tag names
dom changes
treated as html
**************** */

document.querySelector("h1").innerHTML = "<i>hhkhsh</i>";

document.querySelector("h1").innerHTML += "<sup>super</sup>";

const paragraphhtml = document.querySelector("p").innerHTML;

/* *************
textContent
everything will show up from the code
**************** */

const paragraphContent = document.querySelector("p").textContent;

const headingContent = document.querySelector("h1").textContent;
