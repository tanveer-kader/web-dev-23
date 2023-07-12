// for (let i = 1; i <= 10; ++i) {
//   console.log(i);
// }

// const lyrics = "Da ba dee da ba daa";
// for (let i = 0; i < 6; ++i) {
//   console.log(lyrics);
// }

// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i += 2) {
//   console.log(i);
// }

// for (let i = 100; i >= 0; i -= 10) {
//   console.log(i);
// }

// for (let i = 1; i <= 1000; i *= 10) {
//   console.log(i);
// }

// for (let i = 1000; i >= 1; i /= 10) {
//   console.log(i);
// }

// for (let i = 25; i >= 0; i -= 5) {
//   console.log(i);
// }

// const animals = ["lions", "tigers", "bears"];
// for (let i = 0; i < animals.length; ++i) {
//   console.log(i, animals[i]);
// }

// for (let i = animals.length - 1; i >= 0; --i) {
//   console.log(i, animals[i]);
// }

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
// for (let i = 0; i < people.length; ++i) {
//   console.log(people[i].toUpperCase());
// }

// let str = "LOL";

// for (let i = 0; i <= 4; ++i) {
//   console.log("outer:", i);
//   for (let j = 0; j < str.length; ++j) {
//     console.log(" inner:", str[j]);
//   }
// }

// const seatingChart = [
//   ["kristen", "erik", "namita"],
//   ["geoffrey", "juanita", "antonio", "kevin"],
//   ["yuma", "sakura", "jack", "erika"],
// ];

// for (let i = 0; i < seatingChart.length; ++i) {
//   console.log(`Row #${i + 1}`);
//   for (let j = 0; j < seatingChart[i].length; ++j) {
//     console.log(seatingChart[i][j]);
//   }
// }

// let count = 0;
// while (count < 10) {
//   count++;
//   console.log(count);
// }

// const SECRET = "n";

// let guess = prompt("enter the secret code..");

// while (guess !== SECRET) {
//   guess = prompt("enter the secret code..");
// }
// console.log("Congrats!");

// let input = prompt("Say..");
// while (true) {
//   input = prompt(input);
//   if (input.toLocaleLowerCase() === "stop") break;
// }
// console.log("ok");

// let maximum = parseInt(prompt("Enter the maximum number"));

// while (!maximum) {
//   maximum = parseInt(prompt("Enter valid number"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);

// let guess = prompt("guess a numer");
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//   if (guess == "q") break;
//   guess = parseInt(guess);
//   if (guess > targetNum) {
//     guess = prompt("too high");
//     attempts++;
//   } else if (guess < targetNum) {
//     guess = prompt("too low");
//     attempts++;
//   } else {
//     guess = prompt("Please a valid number or  q to quit");
//   }
// }
// if (guess === "q") {
//   console.log("u quit");
// } else {
//   console.log(`congrats! it took ${attempts} attempts`);
// }

// const subreddits = ["cringe", "viral", "nice"];

// for (let sub of subreddits) {
//   console.log(sub);
// }

// for (let char of "hello") {
//   console.log(char);
// }

// const seatingChart = [
//   ["kristen", "erik", "namita"],
//   ["geoffrey", "juanita", "antonio", "kevin"],
//   ["yuma", "sakura", "jack", "erika"],
// ];
// for (let row of seatingChart) {
//   for (let column of row) {
//     console.log(column);
//   }
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let num of numbers) {
//   console.log(num * num);
// }

// const testScores = {
//   keenan: 80,
//   damon: 67,
//   kaalu: 90,
// };
// for (let man in testScores) {
//   console.log(man);
// }
// for (let man in testScores) {
//   console.log(`${man} scored ${testScores[man]}`);
// }

// console.log(Object.keys(testScores));
// console.log(Object.values(testScores));
// console.log(Object.entries(testScores));

// let sum = 0;

// for (let score of Object.values(testScores)) {
//   sum += score;
// }
// console.log(sum / Object.values(testScores).length);
