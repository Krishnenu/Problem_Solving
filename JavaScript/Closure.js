// Definition :
// A closure is a function that retains access to its lexical environment (variables, functions, etc.)
// even after the outer function has finished executing. This allows the inner function to "remember" and
//  interact with the scope in which it was created, long after the outer function has completed.

// Purpose of Closures
// Data Encapsulation/Privacy:

// Closures enable private variables and methods that are inaccessible from the outside, promoting modular and secure code.

// State Preservation:

// They maintain state in asynchronous operations (e.g., timers, event handlers) or functional programming patterns (e.g., currying).

function close() {
  let a = 10;
  return function () {
    if (a === 15) {
      return "limit reached";
    } else {
      a = a + 1;
      return a;
    }
  };
}

let closeCount = close();

console.log(closeCount());
console.log(closeCount());
console.log(closeCount());
console.log(closeCount());
console.log(closeCount());
console.log(closeCount());

function f(fn) {
  let isExecuted = false;
  return function () {
    if (!isExecuted) {
      isExecuted = true;
      return fn();
    } else {
      return "executed";
    }
  };
}

let p = f(() => {
  return "hellow";
});

console.log(p());
console.log(p());
console.log(p());

// Examples
// Private Variable
function createCounter() {
  let count = 0; // Private variable
  return {
    increment: () => ++count,
    getCount: () => count,
  };
}
const counter = createCounter();
counter.increment();

// creating Specialise Function: currying
function multiply(a) {
  return (b) => a * b;
}
const double = multiply(2);
double(5);
