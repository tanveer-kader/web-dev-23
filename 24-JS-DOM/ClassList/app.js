const h2 = document.querySelector("h2");
h2.setAttribute("class", "purple");
h2.setAttribute("class", "border");

let currentClasses = h2.getAttribute("class");
h2.setAttribute("class", `${currentClasses} purple`);
currentClasses = h2.getAttribute("class");

/* *****************
classList
to contain multiple classes
******************** */

h2.classList.remove("purple");
h2.classList.remove("border");

h2.classList.add("purple");
h2.classList.add("border");

const haveBorder = h2.classList.contains("border");
const colorPurple = h2.classList.contains("purple");

h2.classList.toggle("purple");
