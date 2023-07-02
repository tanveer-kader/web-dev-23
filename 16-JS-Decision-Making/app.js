let age = 18;
const ageLimit = 18;

console.log(age > ageLimit);
console.log(age >= ageLimit);
console.log(age < ageLimit);
console.log(age <= ageLimit);

console.log(null == undefined);
console.log(1 == 1);
console.log(1 == "1");
console.log(0 == " ");
console.log(false == 0);

console.log(1 === "1");
console.log(null === undefined);
console.log(false === 0);

console.log(1 != 2);
console.log(1 != "1");
console.log(1 !== "1");
console.log(1 === 1);
console.log(1 !== 1);

alert("hi there");
prompt("THis is a prompt");

let userinput = prompt("enter a number");
console.log(userinput);

let string = "101aaa";
let num = parseInt(string);
console.log(num + 1);

let rating = 3;
if (rating === 3) console.log("you are superstar");
else console.log("you're dumb");

let random = Math.random();

if (random < 0.5) {
  console.log("its less");
  console.log(random);
}

if (random >= 0.5) {
  console.log("Your number is greater");
  console.log(random);
}

function isEven(num) {
  if (num % 2 === 0) {
    console.log("even");
  } else console.log("odd");
}
isEven(7);

const dayOfWeek = prompt("enter a day").toLowerCase();
if (dayOfWeek === "monday") {
  console.log("I hate mondays!");
} else if (dayOfWeek === "maturday") {
  console.log("I love this day");
} else if (dayOfWeek === "friday") {
  console.log("Its ok");
} else {
  console.log("MEH");
}

const age = 65;

if (age < 5) {
  console.log("Baby. Free");
} else if (age < 10) {
  console.log("Child. $10");
} else if (age < 65) {
  console.log("Adult. $20");
} else {
  console.log("Senior. $10");
}

function getColor(phrase) {
  if (phrase === "stop") {
    console.log("red");
  } else if (phrase == "slow") {
    console.log("yellow");
  } else if (phrase == "go") {
    console.log("green");
  } else {
    console.log("purple");
  }
}
getColor("slow");

const password = prompt("please enter a new password");

if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    console.log("Valid Password!");
  } else {
    console.log("Cannot contain spaces!");
  }
} else {
  console.log("Password too short! must be 6+ chars");
}

const num = 102;

if (num <= 100) {
  if (num >= 50) {
    console.log("HEY!");
  }
} else {
  if (num < 103) {
    if (num % 2 === 0) {
      console.log("YOU GOT ME!");
    }
  }
}

const userInput = prompt("Enter something");
if (userInput) {
  console.log("Truthy");
} else {
  console.log("Falsey");
}

if (0) {
  console.log("Truthy");
} else {
  console.log("Falsey");
}

if (null) {
  console.log("Truthy");
} else {
  console.log("Falsey");
}

if (123123) {
  console.log("Truthy");
} else {
  console.log("Falsey");
}

if (-12312) {
  console.log("Truthy");
} else {
  console.log("Falsey");
}

if (undefined) {
  console.log("Truthy");
} else {
  console.log("Falsey");
}

if (" ") {
  console.log("Truthy");
} else {
  console.log("Falsey");
}

const password = prompt("Enter your password");
if (password.length >= 6 && password.indexOf(" ") === -1) {
  console.log("Valid Password");
} else {
  console.log("Incorrect format for password");
}

const mystery = "Pa7aaa";

if (mystery[0] === "P" && mystery.length > 5 && mystery.indexOf("7") !== -1) {
  console.log("YOU GOT IT!!!");
}

const age = 10;
if ((age >= 0 && age < 5) || age >= 65) {
  console.log("Free");
} else if (age >= 5 && age < 10) {
  console.log("$10");
} else if (age >= 10 && age < 65) {
  console.log("$20");
} else {
  console.log("Invalid age");
}

console.log(!(1 === 1));
let firstName = prompt("enter your first name");
if (!firstName) {
  firstName = prompt("try again");
}

const age = 8;
if (!((age >= 0 && age < 5) || age >= 65)) {
  console.log("not a baby or senior");
}

const day = 6;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
  case 7:
    console.log("Weekend");
    break;
  default:
    console.log("Week only have 7 days");
}
