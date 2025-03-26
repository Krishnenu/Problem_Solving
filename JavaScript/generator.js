// function* myGenerator() {
//   yield 1;
//   yield 2;
//   return 3;
// }

// const gen = myGenerator();
// console.log(gen.next()); // { value: 1, done: false }
// console.log(gen.next()); // { value: 2, done: false }
// // console.log(gen.next()); // { value: 3, done: true }

// function* infiniteNumbers() {
//   let n = 0;
//   while (true) yield ++n;
// }

// const numbers = infiniteNumbers();
// console.log(numbers.next()); // 0
// console.log(numbers.next()); // 1

// function* gen() {
//   yield 1;
// }

// console.log(gen());

function* errorHandling() {
  try {
    yield 1;
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

const gen = errorHandling();
console.log(gen.next()); // { value: 1, done: false }
// gen.throw("Something broke!"); // Logs "Error: Something broke!"
