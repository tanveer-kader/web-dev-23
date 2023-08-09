const btn = document.querySelector("#v2");

btn.onclick = function () {
  console.log("You clicked me in function!");
};

function scream() {
  console.log("Aaaaaaaa!");
  console.log("Stop!");
}

btn.onmouseenter = scream;

document.querySelector("h1").onclick = function () {
  alert("You clicked me!");
};

document.querySelector("h2").onclick = () => {
  alert("I from arrow function");
};
