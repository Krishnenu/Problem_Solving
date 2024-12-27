"use strict";

console.log(this);

function test() {
  console.log(this);
}

test();

// Browing function:

const Obj = {
  name: "krishnendu",
  printName: function () {
    console.log(this.name);
  },
};

const Obj2 = {
  name: "Narayan",
};

Obj.printName.call(Obj2);

let name = {
  firstName: "Krishnendu",
  lastName: "Narayan",
};
let printFullName = function (homeTown, state) {
  console.log(
    this.firstName + " " + this.lastName + " " + homeTown + " " + state
  );
};

let Name2 = {
  firstName: "my",
  lastName: "name",
};
// name.printFullName();

printFullName.call(Name2, "Muzaffarpur", "Bihar");

printFullName.apply(Name2, ["Muzaffarpur", "Bihar"]);

let printMyName = printFullName.bind(Name2, "Muzaffarpur", "Bihar");
console.log(printFullName);
printMyName();
