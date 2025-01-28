let fruits = ["apple", "banana", "apple", "orange", "banana", "banana"];
// {
//     apple: 2,
//     banana: 3,
//     orange: 1
//   }

function countOccurence(fruits) {
  let res = {};
  for (let i = 0; i < fruits.length; i++) {
    if (!res[fruits[i]]) {
      res[fruits[i]] = 0;
    }
    res[fruits[i]] = res[fruits[i]] + 1;
  }
  return res;
}

console.log(countOccurence(fruits));
