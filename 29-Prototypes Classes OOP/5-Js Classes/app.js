class Color {
  constructor(r, g, b) {
    console.log("Inside constructor");
    console.log(r, g, b);
  }
}

const c1 = new Color(255, 67, 89);

class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }
  greet() {
    return `hello from ${this.name}`;
  }
  innerRGB() {
    const { r, g, b } = this;
    return `${r}, ${g}, ${b}`;
  }
  rgb() {
    return `rgb(${this.innerRGB()})`;
  }
  rgba(a = 1.0) {
    return `rgb(${this.innerRGB()}, ${a})`;
  }
  hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}

const red = new Color(255, 67, 89, "tomato");
const white = new Color(255, 255, 255, "white");

red.hex === white.hex; //true because same func

white.rgba();
red.rgba();
red.rgba(0.4);
