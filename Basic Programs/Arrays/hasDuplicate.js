const arr = [2, 4, 3];
// function hasDup(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < newArr.length; j++) {
//       if (arr[i] === newArr[j]) {
//         return true;
//       }
//     }
//     newArr.push(arr[i]);
//   }
//   return false;
// }

function hasDup(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (res.includes(arr[i])) {
      return true;
    }
    res.push(arr[i]);
  }
  return false;
}
console.log(hasDup([1, 2, 3]));
