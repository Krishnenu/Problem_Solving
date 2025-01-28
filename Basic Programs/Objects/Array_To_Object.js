let students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 },
  { id: 3, name: "Charlie", age: 14 },
];

// [
//     { id: 1, fullName: "Alice", isAdult: true },
//     { id: 2, fullName: "Bob", isAdult: true },
//     { id: 3, fullName: "Charlie", isAdult: true }
//   ]

function transFormObject(students) {
  let res = [];
  for (let i = 0; i < students.length; i++) {
    let obj = {};
    let id = students[i]?.id;
    let name = students[i]?.name;
    let age = students[i]?.age;
    if (students[i]?.id) {
      obj.id = id;
    }
    if (students[i]?.name) {
      obj.fullName = name;
    }
    if (students[i]?.age) {
      obj.isAdult = age > 17 ? true : false;
    }
    res.push(obj);
  }

  return res;
}

console.log(transFormObject(students));
