// function removeDuplicate(arr) {
//   const uniqueIds = new Set();
//   return arr.filter((item) => {
//     if (!uniqueIds.has(item.id)) {
//       uniqueIds.add(item.id);
//       return true;
//     }
//     return false;
//   });
// }

// function removeDuplicate(arr) {
//   const res = [];
//   const ids = new Set();

//   for (let i = 0; i < arr.length; i++) {
//     if (!ids.has(arr[i].id)) {
//       ids.add(arr[i].id);
//       res.push(arr[i]);
//     }
//   }
//   return res;
// }

const arr = [
  { id: 1, name: "nara" },
  { id: 2, name: "n" },
  { id: 1, name: "narayan" },
];

function removeDuplicate(arr) {
  let newArr = [];
  return arr.filter((obj) => {
    if (newArr.includes(obj.id)) {
      return false;
    } else {
      newArr.push(obj.id);
      return true;
    }
  });
}
console.log(removeDuplicate(arr));
