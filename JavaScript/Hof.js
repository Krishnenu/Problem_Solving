const arr = [2, 3, 1, 2];

// let calc = function (arr, logic) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     res.push(logic(arr[i]));
//   }
//   return res;
// };

// let circle = (radius) => {
//   return Math.PI * radius * radius;
// };

// console.log(calc(arr, circle));

let calc = function (arr, operation) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(operation(arr[i]));
  }
  return res;
};

let circle = function (val) {
  return Math.PI * val * val;
};

console.log(calc(arr, circle));
