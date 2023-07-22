const h1 = document.querySelector("h1");

// doesnt contain styles from stylesheet only contain inline styles
const h1Color = h1.style.color;

//  all this goes to inline styles
h1.style.fontSize = "3em";

h1.style.border = "2px solid pink";

const allLinks = document.querySelectorAll("a");

for (let link of allLinks) {
  link.style.color = "rgb(0,108,134)";
  link.style.textDecorationColor = "magenta";
  link.style.textDecorationStyle = "wavy";
}

// see applied styles (computed)

const h1StylesComputed = window.getComputedStyle(h1);
const h1ColorComputed = window.getComputedStyle(h1).color;
const h1fontSizeComputed = window.getComputedStyle(h1).fontSize;
const h1fontFamilyComputed = window.getComputedStyle(h1).fontFamily;
const h1marginComputed = window.getComputedStyle(h1).margin;
