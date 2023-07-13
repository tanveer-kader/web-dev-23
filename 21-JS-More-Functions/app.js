/* *************
 function scope
************* */
function helpMe() {
  let msg = "I'm on fire!";
  console.log(msg);
}

helpMe();

let bird = "mandarin duck";
function birdWatch() {
  let bird = "golden pheasant";
  console.log(bird);
}

console.log(bird); // mandarin duck
birdWatch(); //golden pheasant

/* *************
 block scope
************* */

let radius = 8;
if (radius > 0) {
  const PI = 3.14;
  let circ = 2 * PI * radius;
  console.log(circ);
}

console.log(radius);
console.log(PI); // not defined
console.log(circ); //not defined

/* *************
 lexical scope
************* */

function outer() {
  let hero = "Black panther";

  function inner() {
    let cryForHelp = `${hero}, please save me!`;
    console.log(cryForHelp);
  }
  inner();
}

outer();

/* *************
 Function expressions
 functions as arguments
************* */

const square = function (num) {
  return num * num;
};

console.log(square(7));

/* *************
 Higher Order Function 
************* */

function callTwice(func) {
  func();
  func();
}

function callTenTimes(f) {
  for (let i = 0; i < 10; ++i) {
    f();
  }
}

function rollDie() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

callTwice(rollDie);
callTenTimes(rollDie);

/* *************
 Higher Order Function
 return function
************* */

function makeMysteryFunc() {
  const rand = Math.random();
  if (rand > 0.5) {
    return function () {
      console.log("Congrats! I am good fuction");
    };
  } else {
    return function () {
      console.log("You have been infected by computer virus");
      console.log("stop trying to do anything");
      console.log("stop trying to do anything");
      console.log("stop trying to do anything");
    };
  }
}

const mystery = makeMysteryFunc();
console.log(mystery());

function makeBetweenFunc(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}

const isChild = makeBetweenFunc(0, 18);
const isAdult = makeBetweenFunc(19, 64);
const isSenior = makeBetweenFunc(65, 120);

console.log(isChild(5));
console.log(isAdult(22));
console.log(isSenior(70));

/* *************
 Methods
************* */

const myMath = {
  PI: 3.1416,
  square: function (num) {
    return num * num;
  },
  cube: function (num) {
    return num ** 3;
  },
};

const myMath = {
  PI: 3.1416,
  square(num) {
    return num * num;
  },
  cube(num) {
    return num ** 3;
  },
};

console.log(myMath.PI);
console.log(myMath.square(3));
console.log(myMath.cube(3));
console.log(myMath["cube"](3));

const square = {
  area(side) {
    return side * side;
  },
  perimeter(side) {
    return side * 4;
  },
};

console.log(square.area(10));
console.log(square.perimeter(10));

/* *************
    This
************* */

const cat = {
  name: "Blue Steele",
  color: "grey",
  breed: "scottish fold",
  meow() {
    console.log(`${this.name} says meow`);
  },
};

cat.meow(); // Blue Steele says meow

// cant get the name due to invocatin context
const meow2 = cat.meow;
meow2(); // undefined says meow

const hen = {
  name: "Helen",
  eggCount: 0,
  layAnEgg() {
    this.eggCount++;
    return "EGG";
  },
};

console.log(hen.name); // "Helen"
console.log(hen.eggCount); // 0
console.log(hen.layAnEgg()); // "EGG"
console.log(hen.layAnEgg()); // "EGG"
console.log(hen.eggCount); // 2

/* *************
 try catch
************* */

try {
  hello.toUpperCase();
} catch {
  console.log("Error!");
}

console.log("After");

function yell(msg) {
  try {
    console.log(msg.toUpperCase().repeat(3));
  } catch (e) {
    console.log(e);
    console.log("please pass string");
  }
}

yell("he");
yell(2);
