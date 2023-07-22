const container = document.querySelector("#container");

for (let i = 0; i < 100; ++i) {
  let button = document.createElement("button");
  button.innerText = `button ${i + 1}`;
  container.appendChild(button);
}
