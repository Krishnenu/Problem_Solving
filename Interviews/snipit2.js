for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

console.log(1 + "10");
console.log("10" + 9);
console.log(true + 10);
console.log(true + "10");
