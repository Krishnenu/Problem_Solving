// value comparision in Object:

const obj = { a: 1, b: { c: 2 }, d: [3, { e: 5 }] };

// value = 4 op=true;

function deepValCheck(obj, element) {
  for (let val of Object.values(obj)) {
    if (val === element) return true;
    if (typeof val === "object" && val !== null) {
      if (deepValCheck(val, element)) return true;
    }
  }
  return false;
}

console.log(deepValCheck(obj, 5));
