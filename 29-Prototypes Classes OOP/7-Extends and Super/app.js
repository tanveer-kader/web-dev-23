class Pet {
  constructor(name, age) {
    console.log("In PET constructor");
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating!`;
  }
}

class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    console.log("In PET constructor");
    super(name, age);
    this.livesLeft = livesLeft;
  }
  meow() {
    return "meow!";
  }
}

class Dog extends Pet {
  bark() {
    return "Woff!";
  }
  eat() {
    return `${this.name} scarfs his food!`;
  }
}

const monty = new Cat("monty", 9);
