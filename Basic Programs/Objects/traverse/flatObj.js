const obj = { a: 1, b: { c: 2, d: [3, 4] } };

// Output: [1, 2, 3, 4]

function flatObj(obj) {
  let res = [];

  for (let [key, val] of Object.entries(obj)) {
    if (typeof val === "number") {
      res = res.concat(val);
    } else if (typeof val === "object" && val !== null) {
      res = res.concat(flatObj(val));
    }
  }
  return res;
}

console.log(flatObj(obj));
