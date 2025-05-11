//1.

function greet() {
  console.log(`Hello, ${this.name}`);
}
const user = { name: "Alice" };
greet.call(user);

//2.
const person = {
  name: "Bob",
  sayHi: function () {
    function inner() {
      console.log(this.name);
    }
    inner.call(person);
  },
};
person.sayHi();

//3.

// sayHi: function () {
//     function inner() {
//       console.log(this.name);
//     }
//     inner.call(this); // Bob
//   }

//4.

// const obj = {
//   name: "Charlie",
//   method: function () {
//     const arrow = () => console.log(this.name);
//     arrow(); // Charlie
//   },
// };
// obj.method();

//5.
// function showDetails(city, country) {
//   console.log(`${this.name} from ${city}, ${country}`);
// }
// const user1 = { name: "Dana" };
// showDetails.apply(user1, ["Paris", "France"]);

// showDetails.call(user1, "Berlin", "Germany");

// 6
// const obj1 = {
//   name: "Eva",
//   greet() {
//     console.log(this.name);
//   },
// };

// const greet = obj1.greet;
// greet();
