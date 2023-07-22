/* **********
createElement appendChild
************ */
const newImg = document.createElement("img");
newImg.src =
  "https://images.unsplash.com/photo-1473366469422-faaf417abaa5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80";

document.body.appendChild(newImg);
newImg.classList.add("square");

const newH3 = document.createElement("h3");
newH3.innerText = "I am new";
document.body.appendChild(newH3);

/* **********
ParentNode.append
************ */

const p = document.querySelector("p");
p.append("I am a new text!");
p.append("I am another new text!", "and another added");

/* **********
ParentNode.prepend
************ */

const newB = document.createElement("b");
newB.append("hi");

p.prepend(newB);

/* **********
Element.insertAdjacentElement()
************ */

const h2 = document.createElement("h2");
h2.append("Are adorable chicken");

const h1 = document.querySelector("h1");

h1.insertAdjacentElement("afterend", h2);

/* **********
childNode.after()
************ */

const h3 = document.createElement("h3");
h3.innerText = "I am h3";
h1.after(h3);

/* **********
childNode.before()
************ */
const anoh3 = document.createElement("h3");
anoh3.innerText = "I am another h3";
h2.before(anoh3);
