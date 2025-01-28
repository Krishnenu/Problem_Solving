let array1 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

let array2 = [
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

// [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];

// function mergeArray(array1, array2) {
//   let combinedArr = [...array1, ...array2];
//   let res = {};
//   for (let i = 0; i < combinedArr.length; i++) {
//     let item = combinedArr[i];
//     res[item.id] = item;
//   }
//   return res;
// }

function mergeArray(array1, array2) {
  let combinedArray = [...array1, ...array2];

  let uniqueMap = new Map();

  combinedArray.forEach((item) => {
    uniqueMap.set(item.id, item);
  });

  return Array.from(uniqueMap.values());
}

console.log(mergeArray(array1, array2));
