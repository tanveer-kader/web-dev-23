let colors = ["red", "green", "blue"];
console.log(typeof colors);
console.log(colors);

let stuff = [true, 12, "cat", null];
console.log(stuff);

let lottoNumbers = [1, 2, 3, 3, 4, 3];
console.log(lottoNumbers);
console.log();

let days = ["Monday", "Tuesday", "Wednesday"];
console.log(days[0]);
console.log(days[1][0]);

let colors = ["rad", "blue", "green", 10];
console.log(colors);
colors[0] = "red";
console.log(colors);
colors[3] = "ten";
console.log(colors);

colors[10] = "indigo";
console.log(colors);
console.log(colors.length);
console.log(colors[6]);
const leaderboard = ["Harry", "Lua", "Hermione", "Bellatrix"];

leaderboard[1] = "Luna";
leaderboard[leaderboard.length - 1] = "Draco";

console.log(leaderboard);

let movieLine = ["tom", "nancy", "pablo"];
movieLine.push("oliver");
console.log(movieLine);

movieLine.push("Harry", "Hermione");
console.log(movieLine);

movieLine.pop();
console.log(movieLine);

let person = movieLine.pop();
console.log(person);

let barbell = [];
barbell.push(45);
barbell.push(45);
barbell.push(25);
barbell.push(10);
barbell.push(2.5);
console.log(barbell);

let movieLine = ["tom", "nancy", "pablo", "oliver", "eva"];
movieLine.shift();
console.log(movieLine);
movieLine.push("jerry", "deniz");
console.log(movieLine);
movieLine.unshift("vip");
console.log(movieLine);

const planets = ["The Moon", "Venus", "Earth", "Mars", "Jupiter"];

planets.shift();
planets.push("Saturn");
planets.unshift("Mercury");

console.log(planets);

let cats = ["blue", "kitty"];
let dogs = ["rusty", "wyatt"];
let combo = dogs.concat(cats);

console.log(combo);

console.log(cats.includes("blue"));
console.log(cats.includes("Blue"));
console.log(combo.indexOf("Blue"));
console.log(combo.indexOf("blue"));

combo.reverse();
console.log(combo);

let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violate"];

let coolColors = colors.slice(3);
console.log(coolColors);
console.log(colors.slice(2, 4));
let warmColors = colors.slice(0, 3);
console.log(warmColors);
console.log(colors.slice(-3));

let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violate"];
colors.splice(5, 1);
console.log(colors);
colors.splice(1, 0, "red-orange");
console.log(colors);
colors.splice(4, 0, "yellow-green", "forest-green");
console.log(colors);
colors.splice(2, 2, "deleted");
console.log(colors);

let scores = [1, 70, 100, 2500, 9, -12, 0, 32];
scores.sort();
console.log(scores);

const gameBoard = [
  ["X", "O", "X"],
  ["O", null, "X"],
  ["O", "O", "X"],
];

console.log(gameBoard);
console.log(gameBoard[1][1]);
const airplaneSeats = [
  ["Ruth", "Anthony", "Stevie"],
  ["Amelia", "Pedro", "Maya"],
  ["Xavier", "Ananya", "Luis"],
  ["Luke", null, "Deniz"],
  ["Rin", "Sakura", "Francisco"],
];

airplaneSeats[3][1] = "Hugo";

console.log(airplaneSeats);
