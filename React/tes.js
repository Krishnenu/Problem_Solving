// function onCall(f) {
//   let isCalled = false;
//   return function () {
//     if (!isCalled) {
//       f();
//       isCalled = true;
//     } else {
//       return "cant call again";
//     }
//   };
// }
// let p = onCall(() => console.log("hello"));

// p();
// p();

// const obj = { value: 42 };
// const arrowFn = function () {
//   console.log(this.value);
// };
// arrowFn.call(obj);

// arrowFn();

function flatten(value) {
  return value.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      acc.push(...flatten(curr));
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);
}

console.log(flatten([1, 2, 3]));

flatten([1, [2, 3]]);
console.log(
  flatten([
    [1, 2],
    [3, 4],
  ])
);
console.log(flatten([1, [2, [3, [4, [5]]]]]));
