// let i = 1;

// function incrementBy(value) {
//   i += value;
//   return i;
// }

function once(value) {
  let i = value;

  throw "Not implemented!";
}

const incrementByOnce = once(4);
console.log(incrementByOnce(2));

console.log(incrementByOnce(3));

console.log(incrementByOnce(2));
