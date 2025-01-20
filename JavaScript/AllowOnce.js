var once = function (fn) {
  let isCalled = false;
  return function (...args) {
    if (!isCalled) {
      isCalled = true;
      return fn(...args);
    }
  };
};

let fn = (a, b) => a - b;
let onceFn = once(fn);

console.log(onceFn(5, 1));
console.log(onceFn(2, 3, 6));
