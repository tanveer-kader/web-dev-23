/*****************
Default Parameters
*******************/

function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1;
}
console.log(rollDie(7));
console.log(rollDie());

function greet(person, msg = "Hi there", punc = "!!!!") {
  console.log(`${msg} ${person}${punc}`);
}

greet("Jack", "Hello");
greet("Jack");

/*****************
Spread
*******************/

/* for function calls */

const nums = [13, 5, 3, 7, 10];

console.log(nums);
console.log(...nums);
console.log(Math.min(...nums));

/* for array literels */

const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];

const neg = cats.concat(dogs);
console.log(neg);

const allPets = [...cats, ...dogs];
console.log(allPets);

/* for object literels */

const feline = { legs: 4, family: "Felidae" };

const canine = {
  isFurry: true,
  family: "Caninae",
};

const catDog = { ...feline, ...canine };
console.log(catDog);

const catDog2 = { ...canine, ...feline };
console.log(catDog2);

const catDog3 = { ...canine, ...feline, family: "Kelato", origin: "minion" };
console.log(catDog3);

const dataFromForm = {
  email: "blueman@gmail.com",
  password: "tobias123!",
  username: "tfunke",
};

const newUser = { ...dataFromForm, id: 2345, isAdmin: false };

console.log(newUser);

/*****************
Rest
*******************/

function sum(...nums) {
  return nums.reduce((total, el) => total + el);
}

console.log(sum(1, 2, 3));

function raceResults(gold, silver, ...everyoneElse) {
  console.log(`GOLD MEDAL GOES TO: ${gold}`);
  console.log(`SILVER MEDAL GOES TO: ${silver}`);
  console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`);
}

raceResults("Tom", "Jack", "Mila", "Tylor", "Rose");

/*****************
Destructuring Arrays
*******************/

const scores = [222, 111, 556, 424, 567, 345];

const [gold, silver] = scores;
console.log(`${gold}, ${silver}`);

const raceResults = ["Eluid Kipchoge", "Feyisa Lelisa", "Galen Rupp"];

const [gold, silver, bronze] = raceResults;
console.log(gold, silver, bronze);

const [fastest, ...everyoneElse] = raceResults;

console.log(`Fastest ${fastest}`);
console.log(`Everyone else ${everyoneElse}`);

/*****************
Destructuring Objects
*******************/

const user = {
  email: "harvey@gmail.com",
  password: "sCoTt123Migbf",
  firstName: "Harvey",
  lastName: "Milk",
  born: 1930,
  died: 1978,
  bio: "Harvey Bernard Milk was an American politician and the first openly",
  city: "San Francisco",
  state: "California",
};

const { email, firstName, lastName } = user;
console.log(email, firstName, lastName);

const { born: birthYear, died: deathYear = "N/A" } = user;
console.log(birthYear, deathYear);

const user2 = {
  email: "stacy@gmail.com",
  password: "sCoTt123Migbf",
  firstName: "Stacy",
  lastName: "Gonzalez",
  born: 1987,
  bio: "Stacy Gonzalez was an American politician and the first openly",
  city: "Tulsa",
  state: "Oklahoma",
};

const { city, state, died = "N/A" } = user2;
console.log(died);

/*****************
Destructuring Parameters
*******************/

const user = {
  email: "harvey@gmail.com",
  password: "sCoTt123Migbf",
  firstName: "Harvey",
  lastName: "Milk",
  born: 1930,
  died: 1978,
  bio: "Harvey Bernard Milk was an American politician and the first openly",
  city: "San Francisco",
  state: "California",
};

function fullName(user) {
  return `${user.firstName} ${user.lastName}`;
}

function fullName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}

destructuring way
function fullName({ firstName, lastName = "default lastname" }) {
  return `${firstName} ${lastName}`;
}

console.log(fullName(user));

const movies = [
  {
    title: "Interestaller",
    score: 98,
    year: 2002,
  },
  {
    title: "Inception",
    score: 90,
    year: 2003,
  },
  {
    title: "Forest Gump",
    score: 95,
    year: 2004,
  },
  {
    title: "Alien",
    score: 80,
    year: 2005,
  },
  {
    title: "Alooo",
    score: 60,
    year: 2006,
  },
];

console.log(movies.filter((movie) => movie.score >= 90));
console.log(movies.filter(({ score }) => score >= 90));

const moviek = movies.map((movie) => {
  return `${movie.title} (${movie.year}) is rated ${movie.score}`;
});
console.log(moviek);

const movied = movies.map(({ title, year, score }) => {
  return `${title} (${year}) is rated ${score}`;
});
console.log(movied);
