const arr = [
  [1, 2, 3],
  [3, 4, [3, 4, [9, 5, 4], 5], 2],
];

// function flatArray(arr) {
//   let res = arr.slice();
//   while (res.some(Array.isArray)) {
//     res = [].concat(...res);
//   }
//   return res;
// }

// function flatArrayReduce(arr) {
//   //   return arr.reduce(
//   //     (acc, val) =>
//   //       Array.isArray(val) ? acc.concat(flatArrayReduce(val)) : acc.concat(val),
//   //     []
//   //   );
//   const flattened = arr.reduce((accumulator, currentValue) => {
//     return accumulator.concat(currentValue);
//   }, []);
//   return flattened;
// }

// console.log(flatArrayReduce(arr));

// let a = [1, 2];
// console.log(Array.isArray(a));

function flatArray(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(flatArray(arr[i]));
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}

console.log(flatArray(arr));
