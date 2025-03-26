let products = [
  { category: "fruit", name: "apple" },
  { category: "vegetable", name: "carrot" },
  { category: "fruit", name: "banana" },
  { category: "vegetable", name: "potato" },
  { category: "fruit", name: "orange" },
];

// {
//     fruit: [
//       { category: "fruit", name: "apple" },
//       { category: "fruit", name: "banana" },
//       { category: "fruit", name: "orange" }
//     ],
//     vegetable: [
//       { category: "vegetable", name: "carrot" },
//       { category: "vegetable", name: "potato" }
//     ]
//   }

function modifyProduct(pro) {
  let result = {};
  pro.forEach((item) => {
    let category = item.category;
    if (!result[category]) {
      result[category] = [];
    }
    result[category].push(item);
  });
  return result;
}
console.log(modifyProduct(products));

let arr = [1, 2, 3, 2, 5, 6, 5, 6];

function removeDuplicate(arr) {
  //   return arr.reduce((acc, curr) => {
  //     if (!acc.includes(curr)) {
  //       acc.push(curr);
  //     }
  //     return acc;
  //   }, []);
  return arr.filter((item, i, arr) => arr.indexOf(item) === i);
}

console.log("kkk", removeDuplicate(arr));
