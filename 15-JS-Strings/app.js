let username = "Ziggy";
console.log(username);

let favAnimal = "Dumbo Octopus";
console.log(favAnimal);

let speech = "She said 'I hate you'";
console.log(speech);

let bestColor = "purple";
let quote = 'You had me at "hello"';

console.log(bestColor);
console.log(quote);

let animal = "Dumbo Octopus";
console.log(animal[0]);
console.log(animal[1]);
console.log(animal[5]);
console.log(animal[6]);
console.log(animal[7]);
console.log(animal[99]);

console.log(animal);
console.log(animal.length);
console.log("hello"[0]);
console.log("lol" + "lol");

let phone = "(231)345-1344";
console.log(phone[0]);

let firstName = "River";
let lastName = "Phoenix";
console.log(firstName + lastName);

console.log(firstName + " " + lastName);

let fullName = firstName + " " + lastName;

console.log(fullName);

console.log(firstName);

let result = 1 + "hi";

console.log(result);
console.log(typeof result);

let msg = "leave me alone";
console.log(msg.toUpperCase());
console.log(msg);

let greeting = "  leave me alone ";
console.log(greeting.trim());

console.log(greeting.trim().toUpperCase());

const message = "    TASTE THE RAINBOW!  ";

let whisper = message.trim().toLowerCase();

console.log(whisper);

let tvShow = "catdog";

console.log(tvShow.indexOf("cat"));
console.log(tvShow.indexOf("dog"));
console.log(tvShow.indexOf("zz"));
console.log(tvShow.indexOf("t"));

let str = "a quick brown fox jumps over the lazy dog";

console.log(str.slice(7));
console.log(str.slice(2, 7));

console.log(str.slice(-3));
console.log(str.slice(-8));

let annoyingLaugh = "teehe so funny! teehee!";

console.log(annoyingLaugh);

console.log(annoyingLaugh.replace("teehee", "haha"));

console.log(annoyingLaugh.replaceAll("t", "h"));

let str1 = "hello",
  str2 = "world";

let str3 = str1.concat(str2);
console.log(str3);

const word = "skateboard";

const facialHair = word.slice(5).replace("o", "e");

console.log(facialHair);

console.log(`I counted ${3 + 4} sheeps`);

let qty = 5,
  price = 6,
  product = "banana";

console.log(
  `You bought ${qty} ${product.toUpperCase()}. Total is: $${price * qty}`
);

let loggedInUser = null;
console.log(loggedInUser);
loggedInUser = "Ana De Armas";
console.log(loggedInUser);

console.log(Math.PI);
console.log(Math.pow(2, 3));
console.log(Math.ceil(3.2));
console.log(Math.floor(3.8));
console.log(Math.round(3.2));
console.log(Math.round(3.8));

console.log(Math.random());

const step1 = Math.random();

const step2 = step1 * 10;

const step3 = Math.floor(step2);

const step4 = step3 + 1;

console.log(step1);
console.log(step2);
console.log(step3);
console.log(step4);

console.log(result);

const num = Math.floor(Math.random() * 5) + 1;

console.log(num);

const nums = Math.floor(Math.random() * 5) + 20;
console.log(nums);

const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

const roll = `roll:"You rolled a ${die1} and a ${die2}. They sum to ${
  die1 + die2
}"`;

console.log(roll);
