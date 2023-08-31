const add = (x, y) => x + y;
const PI = 3.14159;
const square = (x) => x * x;

module.exports.add = add;
module.exports.PI = PI;
module.exports.square = square;

// define them in object and export the obj

const math = {
  add: add,
  PI: PI,
  square: square,
};

module.exports = math;

// add directly and export

module.exports.add = (x, y) => x + y;
module.exports.PI = 3.14159;
module.exports.square = (x) => x * x;

// shortcut syntax

exports.add = add;
exports.PI = PI;
exports.square = square;
