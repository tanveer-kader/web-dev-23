const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");

btn1.addEventListener("click", function () {
  const newColor = makeRandColor();
  document.body.style.backgroundColor = newColor;
  // document.body.setAttribute("style", `background-color: ${newColor}`);

  h1.innerText = `${newColor} :: I dont change color!`;
  // h1.style.color = "red";
});

const makeRandColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

btn2.addEventListener("click", function () {
  const values = makeRGB();
  const r = values[0];
  const g = values[1];
  const b = values[2];

  if (r < 100 && g < 100 && b < 100) {
    h2.style.color = "#fff";
  } else {
    h2.style.color = "#000";
  }
  const newColor = `rgb(${r}, ${g}, ${b})`;
  document.body.style.backgroundColor = newColor;

  // document.body.setAttribute("style", `background-color: ${newColor}`);

  h2.innerText = `${newColor} :: I change color!`;
});

const makeRGB = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return [r, g, b];
};
