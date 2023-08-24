/*
Object Prototypes
Prototypes are the mechanism by which JS objects inherit features from one another.

objects can have a prototype object which acts as a template object that inherits methods and properties from
*/

const arr = [1, 2, 3];
console.log(arr);

arr.sing = function () {
  console.log("LA LA LA");
};

console.log(arr);

arr.push(5);
console.log(arr);

const arr2 = [4, 5, 6];
console.log("arr2 ", arr2);
console.log("arr2 ", arr.includes(2));

const body = document.body;
console.log(body);
console.dir(body);

console.log("array prototype ", Array.prototype);

console.log("string prototype ", String.prototype);

/*
adding own prototype to string
all string created after this will inherit it
 */

String.prototype.grumpus = () => alert("Go Away!!!");

console.log("string prototype after adding grumpus", String.prototype);

const cat = "Blue";
cat.grumpus();

String.prototype.yell = function () {
  console.log(this.toUpperCase());
  console.log(`OMG!!! ${this.toUpperCase()}AGHGHG!`);
};

"hello".yell();
"i love you".yell();

/*
override existing function
 */

Array.prototype.pop = function () {
  return "SORRY I WANT THET ELEMENT, I WILL NEVER POP IT OFF!";
};

console.log([7, 8, 9, 10].pop());

const dog = "timothy";
console.log(dog.__proto__);
console.log(String.prototype);
console.log(".__proto__ is a reference of actual prototype object  .prototype");
