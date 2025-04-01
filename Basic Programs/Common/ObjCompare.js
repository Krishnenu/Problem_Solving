// compare two objects

const obj1 = { name: "Hi", p: { s: 8 }, age: 20 };
const obj2 = { name: "Hi", p: { s: 8 }, age: 20 };

// function deepEqual(obj1, obj2) {
//   if (obj1 === obj2) {
//     return true;
//   }

//   if (
//     obj1 === null ||
//     obj2 === null ||
//     typeof obj1 !== "object" ||
//     typeof obj2 !== "object"
//   ) {
//     return false;
//   }

//   const keys1 = Object.keys(obj1);
//   //[name, p, age]

//   const keys2 = Object.keys(obj2);
//   //[name, p, age]

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   for (let key of keys1) {
//     if (!keys2.includes(key)) {
//       return false;
//     }

//     if (!deepEqual(obj1[key], obj2[key])) {
//       return false;
//     }
//   }

//   return true;
// }

// function compareObj(obj1, obj2) {
//   if (
//     typeof obj1 === "object" &&
//     obj1 !== null &&
//     typeof obj1 === "object" &&
//     obj1 !== null
//   ) {
//     let key1 = Object.keys(obj1);
//     let key2 = Object.keys(obj2);
//     if (key1.length !== key2.length) return false;

//     for (let key of key1) {
//       if (!key2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
//         return false;
//       }
//     }
//     return true;
//   } else {
//     return obj1 === obj2;
//   }
// }

// console.log(compareObj(obj1, obj2));

function compareObject(obj1, obj2) {
  const obj1Key = Object.keys(obj1);
  const ob2Key = Object.keys(obj2);
  const obj1Value = Object.values(obj1);
  const obj2Value = Object.values(obj2);

  if (obj1Key.length === ob2Key.length) {
    console.log(compare(obj1Value, obj2Value));
    return compare(obj1Key, ob2Key) && compare(obj1Value, obj2Value);
  }

  return false;
}

function compare(arr1, arr2) {
  let comp = true;
  arr1.map((item) => {
    if (!arr2.includes(item)) {
      comp = false;
    }
  });
  return comp;
}

console.log(compareObject(obj1, obj2));
