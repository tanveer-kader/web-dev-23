const btn3 = document.querySelector("#v3");
btn3.addEventListener("dblclick", function () {
  alert("clicked");
});

function scream() {
  alert("from scream func");
}

const btn4 = document.querySelector("#v4");
btn4.addEventListener("mouseup", scream);

function twist() {
  console.log("Twist");
}
function shout() {
  console.log("Shout");
}

const tasButton = document.querySelector("#tas");

// only one event is executed
// tasButton.onclick = twist;
// tasButton.onclick = shout;

tasButton.addEventListener("click", twist, { once: true });
tasButton.addEventListener("click", shout);

// exercise

const helloButton = document.querySelector("#hello");
const gbyeButton = document.querySelector("#goodbye");

helloButton.addEventListener("click", () => {
  console.log("hello");
});

gbyeButton.addEventListener("click", () => {
  console.log("goodbye");
});
