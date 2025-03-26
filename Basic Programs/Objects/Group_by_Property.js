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

function groupByProperty(products) {
  let res = {};
  for (let item of products) {
    let { category } = item;
    if (!res[category]) {
      res[category] = [];
    }
    res[category].push(item);
  }
  return res;
}

console.log(groupByProperty(products));

// function groupByProperty(arr) {
//   let res = {};
//   for (let i = 0; i < arr.length; i++) {
//     let item = arr[i];
//     let category = item.category;
//     if (!res[category]) {
//       res[category] = [];
//     }
//     res[category].push(item);
//   }
//   return res;
// }
