const arr = [3, 2, 1, 2, 3, 1, 2];

// function removeDuplicate(arr) {
//   return arr.filter((item, index, arr) => arr.indexOf(item) === index);
// }

function removeDuplicate(arr) {
  let hm = {};

  for (let i of arr) {
    if (!hm[i]) {
      hm[i] = i;
    }
  }
  return Object.keys(hm).map((key) => (isNaN(key) ? key : Number(key)));
}

console.log(removeDuplicate(arr));
