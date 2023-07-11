const person = { firstName: "Mick", lastName: "Jagger" };

console.log(person);

const kitchenSink = {
  favNum: 92319023,
  isFunny: true,
  colors: ["red", "orange"],
};

console.log(kitchenSink);

const product = {
  name: "Gummy Bears",
  inStock: true,
  price: 1.99,
  flavors: ["grape", "apple", "cherry"],
};

console.log(product);

console.log(person["firstName"]);
console.log(product["flavors"]);

console.log(person.firstName);
console.log(product.name);

const years = { 1999: "GOOD", 2020: "BAD" };
let birthyear = 2020;
console.log(years[1999]);
console.log(years["1999"]);
console.log(years[birthyear]);

const dum = { true: "dat", null: "asdfdas" };
console.log(dum);
console.log(dum.true);
console.log(dum["true"]);
console.log(dum["tr" + "ue"]);

const restaurant = {
  name: "Ichiran Ramen",
  address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
  city: "Brooklyn",
  state: "NY",
  zipcode: "11206",
};

let fullAddress = `${restaurant["address"]}, ${restaurant["city"]}, ${restaurant["state"]} ${restaurant["zipcode"]}`;

console.log(fullAddress);

const midterms = { danielle: 96, thomas: 78 };
console.log(midterms);

midterms.thomas = 79;
console.log(midterms);

midterms.thomas = "C+";
console.log(midterms);

midterms["danielle"] = "A";
console.log(midterms);

midterms.ezra = "B+";
midterms["antonio"] = "A-";
console.log(midterms);

const comments = [
  { username: "Tammy", text: "lololol", votes: 9 },
  { username: "fishboy", text: "glub glub", votes: 12387 },
];

console.log(comments[1]["text"]);
console.log(comments[1].text);

const shoppingCart = [
  {
    product: "Jenga Classic",
    price: 6.88,
    quantity: 1,
  },
  {
    product: "Echo Dot",
    price: 29.99,
    quantity: 3,
  },
  {
    product: "Fire Stick",
    price: 39.99,
    quantity: 2,
  },
];

const student = {
  firstName: "David",
  lastName: "Jones",
  strengths: ["Music", "Art"],
  exams: {
    midterm: 92,
    final: 88,
  },
};

console.log(shoppingCart[1].quantity);
console.log(student.exams.midterm);
console.log(student.strengths[0]);
