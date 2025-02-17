const person = {
  name: "Krish",
  place: "bangalore",
};

const obj = new Object();
obj.name = "krish";
obj.place = "Bangalore";

console.log(obj);

// Using ES6 class

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

Person.prototype.greet = function () {
  console.log(`Hello, I'm ${this.name}`);
};

const g = new Person("krish", 30);
g.greet();

const parent = {
  greet() {
    console.log(`Hello from ${this.name}`);
  },
};

// using create constructor
const child = Object.create(parent);
child.name = "Krish";
child.greet();
