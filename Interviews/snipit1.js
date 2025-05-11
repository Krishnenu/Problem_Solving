// output of this code :

const a = {};
const b = { key: a };
const c = { key: b };

a[b] = 123;
a[c] = 456;
console.log(a[b]);

//guess the output

function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

let counter1 = counter();
let counter2 = counter();

counter1();
counter1();
counter2();

// guess the output:
console.log(foo);
var foo = 10;
function foo() {
  foo = 20;
  return foo;
}
