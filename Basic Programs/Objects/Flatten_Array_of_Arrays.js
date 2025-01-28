let nestedArray = [
  [1, 2],
  [3, [8, 9], 4],
  [5, 6],
];

// [1, 2, 3, 4, 5, 6]

function flatArray(array) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      res = res.concat(flatArray(array[i]));
    } else {
      res.push(array[i]);
    }
  }
  return res;
}

console.log(flatArray(nestedArray));
