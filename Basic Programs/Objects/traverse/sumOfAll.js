const obj = { a: 1, b: { c: 2 }, d: [3, 4] };

function sumOfAll(obj) {
  let sum = 0;

  for (let val of Object.values(obj)) {
    if (typeof val === "number") {
      sum = sum + val;
    }
    if (typeof val === "object" && val !== null) {
      sum = sum + sumOfAll(val);
    }
  }
  return sum;
}

console.log(sumOfAll(obj));
