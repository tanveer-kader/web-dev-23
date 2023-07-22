/* **********
node.removeChild()
************ */
const firstLi = document.querySelector("li");

const ul = firstLi.parentElement;

ul.removeChild(firstLi);

const b = document.querySelector("b");
b.parentElement.removeChild(b);

/* **********
node.remove()
************ */
const img = document.querySelector("img");
img.remove();
