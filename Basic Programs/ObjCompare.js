// compare two objects

const obj1 = { name: "Hi", p: { s: 8 }, age: 20 };
const obj2 = { name: "Hi", p: { s: 8 }, age: 20 };

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  if (
    obj1 === null ||
    obj2 === null ||
    typeof obj1 !== "object" ||
    typeof obj2 !== "object"
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (!keys2.includes(key)) {
      return false;
    }

    if (!deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

function compareObj(obj1, obj2) {
  if (
    typeof obj1 === "object" &&
    obj1 !== null &&
    typeof obj1 === "object" &&
    obj1 !== null
  ) {
    let key1 = Object.keys(obj1);
    let key2 = Object.keys(obj2);
    if (key1.length !== key2.length) return false;

    for (let key of key1) {
      if (!key2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
        return false;
      }
    }
    return true;
  } else {
    return obj1 === obj2;
  }
}

console.log(compareObj(obj1, obj2));
