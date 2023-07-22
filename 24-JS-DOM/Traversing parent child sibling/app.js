/* ***************
parent 
***************** */
const firstBold = document.querySelector("b");
const boldParent = firstBold.parentElement;
const boldGrandparent = boldParent.parentElement;
const boldGreatGrandparent = boldGrandparent.parentElement;

/* ***************
children
***************** */
const firstParagraph = document.querySelector("p");
const ChildsFirstParagraph = firstParagraph.children;

/* ***************
sibling
***************** */
const squareImg = document.querySelector(".square");

const nextSibling = squareImg.nextSibling;
const prevSibling = squareImg.previousSibling;

const nextElementSibling = squareImg.nextElementSibling;
const prevElementSibling = squareImg.prevElementSibling;
