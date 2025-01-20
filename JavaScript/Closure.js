// function close() {
//   let a = 10;
//   return function () {
//     if (a === 15) {
//       return "limit reached";
//     } else {
//       a = a + 1;
//       return a;
//     }
//   };
// }

// let closeCount = close();

// console.log(closeCount());
// console.log(closeCount());
// console.log(closeCount());
// console.log(closeCount());
// console.log(closeCount());
// console.log(closeCount());

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
