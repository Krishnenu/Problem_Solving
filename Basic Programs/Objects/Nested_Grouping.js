let items = [
  { category: "fruit", subcategory: "tropical", name: "banana" },
  { category: "fruit", subcategory: "citrus", name: "orange" },
  { category: "vegetable", subcategory: "leafy", name: "spinach" },
  { category: "fruit", subcategory: "tropical", name: "mango" },
];

// {
//     fruit: {
//       tropical: [
//         { category: "fruit", subcategory: "tropical", name: "banana" },
//         { category: "fruit", subcategory: "tropical", name: "mango" }
//       ],
//       citrus: [
//         { category: "fruit", subcategory: "citrus", name: "orange" }
//       ]
//     },
//     vegetable: {
//       leafy: [
//         { category: "vegetable", subcategory: "leafy", name: "spinach" }
//       ]
//     }
//   }

function nestedGrouping(items) {
  let res = {};
  for (let i = 0; i < items.length; i++) {}
}

console.log(nestedGrouping(items));
