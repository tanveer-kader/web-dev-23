const math = require("./math");

console.log(math);
console.log(math.add(2, 3));
console.log(math.PI);
console.log(math.square(9));

// can only use some of objects

const { PI, square } = require("./math");
console.log(PI);
console.log(square(9));
