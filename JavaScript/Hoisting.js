//In JavaScript, hoisting is a behavior where declarations of variables, functions, or classes
// appear to be moved (or "hoisted") to the top of their scope during compilation.
// This happens behind the scenes in the JavaScript engine's execution phase. However,
// the actual behavior of hoisting differs depending on whether we're dealing with variables (var, let, const),
// functions, or classes.

// let and const Hoisting:
// Variables declared with let and const are hoisted but are not initialized. They are placed in a "temporal dead zone" (TDZ) from the start of the block until the declaration is encountered.
// Accessing them before their declaration results in a ReferenceError.

console.log(x); // undefined
var x = 5;
console.log(x); // 5

// let and const Hoisting:
// Variables declared with let and const are hoisted but are not initialized. They are placed in a "temporal dead zone" (TDZ) from the start of the block until the declaration is encountered.
// Accessing them before their declaration results in a ReferenceError.

// console.log(y); // ReferenceError: Cannot access 'y' before initialization
// let y = 10;

// Key Points:
// var declarations are hoisted and initialized with undefined.
// let and const declarations are hoisted but uninitialized until the actual declaration is encountered.

// 2.
// Function Declaration Hoisting
// Function declarations are fully hoisted to the top of their scope.
// This means you can call the function before its definition in the code.

greet(); // "Hello, World!"

function greet() {
  console.log("Hello, World!");
}

// 3.
//Function Expression and Hoisting
// Function expressions (whether named or anonymous) and arrow functions are treated as variables.
// Only the variable declaration is hoisted, not the function definition.

console.log(sayHello); // undefined
var sayHello = function () {
  console.log("Hello!");
};

sayHello(); // "Hello!"

// 4.
// Class Hoisting
// Classes in JavaScript are hoisted but not initialized, similar to let and const.
// Accessing a class before its declaration results in a ReferenceError.

// const obj = new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization

class MyClass {
  constructor() {
    this.name = "JavaScript";
  }
}

// 5.

// IIFE (Immediately Invoked Function Expressions) and Hoisting
// When combining hoisting with IIFEs, you can encounter interesting behavior:
(function () {
  console.log(a); // undefined
  var a = 10;
  console.log(a); // 10
})();

// 6.
// Function Overriding via Hoisting
// In the case of multiple function declarations in the same scope, the last declaration overrides earlier ones due to hoisting.

function test() {
  console.log("First");
}

function test() {
  console.log("Second");
}

test(); // "Second"

// Best Practices to Avoid Hoisting Pitfalls
// Always declare variables at the top of their scope.
// Use let and const instead of var for better scoping and to avoid issues with hoisting.
// Declare functions before calling them for better readability.

var b;
console.log(b);
