/* ************
for each
************* */
const numbers = [1, 2, 3, 4];

function print(element) {
  console.log(element);
}

numbers.forEach(print);

numbers.forEach(function (el) {
  console.log(el);
});

const movies = [
  {
    title: "Interestaller",
    score: 98,
  },
  {
    title: "Inception",
    score: 90,
  },
  {
    title: "Forest Gump",
    score: 95,
  },
];

movies.forEach(function (movie) {
  console.log(`${movie.title} - ${movie.score}/100`);
});

/* ************
    map
************* */
const numbers = [1, 2, 3, 4];

const doubles = numbers.map(function (num) {
  return num * 2;
});

console.log(doubles);

const movies = [
  {
    title: "Interestaller",
    score: 98,
  },
  {
    title: "Inception",
    score: 90,
  },
  {
    title: "Forest Gump",
    score: 95,
  },
];

const titles = movies.map(function (movie) {
  return movie.title.toUpperCase();
});
console.log(titles);
const fullNames = [
  { first: "Albus", last: "Dumbledore" },
  { first: "Harry", last: "Potter" },
  { first: "Hermione", last: "Granger" },
  { first: "Ron", last: "Weasley" },
  { first: "Rubeus", last: "Hagrid" },
  { first: "Minerva", last: "McGonagall" },
  { first: "Severus", last: "Snape" },
];

const firstNames = fullNames.map(function (name) {
  return name.first;
});

console.log(firstNames);

/* ************
  Arrow function
************* */

const add = (x, y) => {
  return x + y;
};

const square = (x) => {
  return x * x;
};

const rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
};

console.log(add(2, 3));
console.log(square(6));
console.log(rollDie());

const greet = (name) => {
  return `Hey ${name}!`;
};

console.log(greet("Rock"));

/* ************
  Arrow function implicit return
************* */

const rollDie = () => Math.floor(Math.random() * 6) + 1;

console.log(rollDie());

const add = (x, y) => x + y;
console.log(add(3, 5));

const square = (x) => x * x;
console.log(square(3));

/* ************
  Arrow function
************* */

const movies = [
  {
    title: "Interestaller",
    score: 98,
  },
  {
    title: "Inception",
    score: 90,
  },
  {
    title: "Forest Gump",
    score: 95,
  },
];

const newMovies = movies.map((movie) => `${movie.title} - ${movie.score / 10}`);

console.log(newMovies);

/* ************
  setTimeout setInterval
************* */

console.log("HELLO!!");
setTimeout(() => {
  console.log("... are you still there?");
}, 3000);
console.log("Goodbye!!");

const id = setInterval(() => {
  console.log(Math.random());
}, 3000);

setTimeout(() => {
  clearInterval(id);
}, 10000);

/* ************
  filter method
  makes a new array with the defined condition
************* */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArr = numbers.filter((n) => n > 5);
console.log(newArr);

const movies = [
  {
    title: "Interestaller",
    score: 98,
  },
  {
    title: "Inception",
    score: 90,
  },
  {
    title: "Forest Gump",
    score: 95,
  },
  {
    title: "Alien",
    score: 80,
  },
  {
    title: "Alooo",
    score: 60,
  },
];

const bestMovies = movies.filter((movie) => movie.score >= 90);
console.log(bestMovies);

const avgMovies = movies.filter((movie) => movie.score < 90);
console.log(avgMovies);

const bestMoviesName = movies
  .filter((movie) => movie.score >= 90)
  .map((movie) => movie.title);

console.log(bestMoviesName);

function validUserNames(usernames) {
  return usernames.filter((username) => username.length < 10);
}
console.log(
  validUserNames([
    "mark",
    "staceysmom1978",
    "q29832128238983",
    "carrie98",
    "MoanaFan",
  ])
);

/* ************
  every / some
************* */

const exams = [33, 80, 70, 60, 40];

console.log(exams.every((score) => score >= 60));
console.log(exams.every((score) => score >= 30));

console.log(exams.some((score) => score < 30));
console.log(exams.some((score) => score >= 80));

const movies = [
  {
    title: "Interestaller",
    score: 98,
  },
  {
    title: "Inception",
    score: 90,
  },
  {
    title: "Forest Gump",
    score: 95,
  },
  {
    title: "Alien",
    score: 80,
  },
  {
    title: "Alooo",
    score: 60,
  },
];

console.log(movies.some((movie) => movie.score >= 90));

console.log(movies.some((movie) => movie.score < 50));

function allEvens(nums) {
  return nums.every((num) => num % 2 == 0);
}

const allEvens = (nums) => {
  return nums.every((num) => num % 2 == 0);
};

console.log(allEvens([2, 4, 6, 8]));
console.log(allEvens([1, 4, 6, 8]));
console.log(allEvens([1, 2, 3]));

/* ************
  reduce
************* */

const nums = [3, 5, 7, 9, 11];

const sum = nums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(sum);

console.log(nums.reduce((x, y) => x + y)); // shorthand

const minNum = nums.reduce((min, num) => {
  if (num < min) return num;
  else return min;
});

const maxNum = nums.reduce((max, num) => {
  if (num > max) return num;
  else return max;
});

console.log(maxNum);

const movies = [
  {
    title: "Interestaller",
    score: 98,
  },
  {
    title: "Inception",
    score: 90,
  },
  {
    title: "Forest Gump",
    score: 95,
  },
  {
    title: "Alien",
    score: 80,
  },
  {
    title: "Alooo",
    score: 60,
  },
];

const bestMovies = movies.reduce((bestMovie, CurrentMovie) => {
  if (CurrentMovie.score > bestMovie.score) return CurrentMovie;
  else return bestMovie;
});

console.log(bestMovies);

const nums = [3, 5, 7, 9, 11];
const initialValue = 20;

const sum = nums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, initialValue);
console.log(sum);

/* ************
  Arrow func and this
************* */
const person = {
  firstName: "Viggo",
  lastName: "Mortensen",
  fullName: function () {
    // works on how the function executes
    return `${this.firstName} ${this.lastName}`;
  },
};

const person = {
  firstName: "Viggo",
  lastName: "Mortensen",
  fullName: function () {
    // works on how the function executes, nothing to do with scope
    return `${this.firstName} ${this.lastName}`;
  },
  shoutName: function () {
    // refer to the scope that it was created in, will not work for non arrow function, this will refer to the window object
    setTimeout(() => {
      console.log(this.fullName());
    }, 3000);
  },
};

console.log(person.shoutName());
