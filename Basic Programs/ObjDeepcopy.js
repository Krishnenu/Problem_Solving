const obj1 = { a: 10, b: "Hii" };

// function deepCopy(obj) {
//   if (obj === null || typeof obj !== "object") {
//     return obj;
//   }
//   if (Array.isArray(obj)) {
//     return obj.map(deepCopy);
//   }
//   let newObj = {};
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       newObj[key] = deepCopy(obj[key]);
//     }
//   }
//   return newObj;
// }

// console.log(deepCopy(obj1));
