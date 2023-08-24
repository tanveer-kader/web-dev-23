// constructor function
function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

Color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function () {
  const { r, g, b } = this;
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function (a = 1.0) {
  const { r, g, b } = this;
  return `rgba(${r}, ${g}, ${b}), ${a}`;
};

/* constuctor function returns undefined when it is called on its own  */
console.log(Color(255, 0, 0));

/* the new operator 
1. creates a blank plain js object
2. links (sets the constructor of) this object to another object
3. passes the newly created object from step 1 as the this context
4. returns this if the function doesn't return its own object
*/

const color1 = new Color(40, 50, 60);
const color2 = new Color(0, 50, 60);
