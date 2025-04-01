const community = require("./Communities.json");

let { pk, name, icon, username } = community.communities[0];

// console.log(pk, name, icon, username);

// simple destructuring:
const arrJson = [{ first: "hellow", last: "new" }]; // destructure array of json.

const [{ first, last }] = arrJson;

console.log(first, last);

const obj = { firstName: "deeps", lastName: "hellow" };

const { firstName, lastName } = obj; // destructuring from Obj

console.log(firstName, lastName);

const array = [13, 21, 3, 4, 2, 1, 2];

const [a, b] = array; // destructuring from array;
console.log(a, b);

function p(...args) {
  // passing args using rest operator and its takes as array of args that why i am able to get args.length;
  console.log(args.length);
  return args[0] + args[1] + args[3];
}

console.log(p(10, 10, 8, 78));
