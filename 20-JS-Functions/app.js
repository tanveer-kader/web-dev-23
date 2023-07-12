function singSong() {
  console.log("do");
  console.log("re");
  console.log("me");
}

singSong();

function printHeart() {
  console.log("<3");
}

printHeart();

function greet(name) {
  console.log(`Greet ${name}`);
}

greet("Tania");
greet("Jack");

function avg(nums) {
  let sum = 0;
  for (num of nums) {
    sum += num;
  }
  console.log(sum / nums.length);
}

avg([20, 25]);
avg([20, 25, 30]);

function rant(message) {
  console.log(message.toUpperCase());
  console.log(message.toUpperCase());
  console.log(message.toUpperCase());
}

rant("I hate beets");

function greet(firstName, lastName) {
  console.log(`Hey there, ${firstName} ${lastName[0]}`);
}
greet("Coolney", "George");
greet("Presley", "Elvis");

function repeater(message, num) {
  let str = "";
  while (num--) {
    str += message;
  }
  console.log(str);
}

repeater("hello world | ", 3);
repeater("$", 3);

function isSnakeEyes(die1, die2) {
  if (die1 === 1 && die2 === 1) {
    console.log("Snake Eyes!");
  } else {
    console.log("Not Snake Eyes!");
  }
}

isSnakeEyes(1, 2);
isSnakeEyes(1, 1);

function add(x, y) {
  if (typeof x !== "number" || typeof y != "number") {
    return false;
  }
  return x + y;
}

let sum = add(2, 3);
sum = add(2, "k");
multi = add(add(1, 3), add(2, 3));
console.log(sum);
console.log(multi);

function multiply(x, y) {
  return x * y;
}

let ans = multiply(2, 3);
console.log(ans);

function isShortsWeather(temperature) {
  if (temperature >= 75) return true;
  else return false;
}

console.log(isShortWeather(80));
console.log(isShortWeather(32));

function lastElement(arr) {
  if (arr.length === 0) return null;
  return arr[arr.length - 1];
}

console.log(lastElement([3, 5, 7])); //7
console.log(lastElement([1])); //1
console.log(lastElement([])); //null

function capitalize(str) {
  let capStr = str.slice(1);
  capStr = str[0].toUpperCase() + capStr;
  return capStr;
}

function capitalize(str) {
  let capStr = str[0].toUpperCase() + str.slice(1);
  return capStr;
}

console.log(capitalize("eggplant"));

function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

console.log(sumArray([1, 2, 3])); // 6
console.log(sumArray([2, 2, 2, 2])); // 8
console.log(sumArray([50, 50, 1])); // 101

function returnDay(num) {
  if (num < 1 || num > 7) return null;
  const week = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
  };
  return week[num];
}

console.log(returnDay(1));
console.log(returnDay(2));
console.log(returnDay(8));
console.log(returnDay(0));
