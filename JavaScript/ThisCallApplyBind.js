"use strict";

console.log(this);

function test() {
  console.log(this);
}

test();

// Browing function: by use of call Apply and bind.
// call takes the two argument 1. reference of the object 2. parameters to pass
// apply is same as call by its takes array of parameter as 2nd argument.
// bind is used to return the function and its also takes arugument in similar way as on case of call.

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

// this concept in terms of Arrow function.

const obj2 = {
  firstName: "Krishnendu",
  lastName: "Narayan",
  printFullName: function () {
    //enclosing lexical scope.
    let y = () => {
      console.log(this.firstName);
    };
    y();
  },
  a: () => {
    console.log(this);
  },
};

obj2.printFullName();
obj2.a(); // changed scope to global coz arrow function takes the scope of its lexical context enclosed;
