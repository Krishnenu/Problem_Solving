// copy objects from other object deep clone;

const original = { a: 1, b: { c: [2, 3] } };

function deepClone(obj) {
  if (typeof obj !== "object" || obj === null) return obj;
  const clone = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    clone[key] = deepClone(obj[key]);
  }
  return clone;
}

console.log(deepClone(original));
