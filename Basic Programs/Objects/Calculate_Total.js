let cart = [
  { item: "apple", price: 1.2, quantity: 3 },
  { item: "banana", price: 0.8, quantity: 5 },
  { item: "orange", price: 1.0, quantity: 2 },
];

// 9.6

function calc(arr) {
  // let totalPrice = 0;
  // for (let item of arr) {
  //   if (item.price) {
  //     totalPrice = totalPrice + item.price;
  //     // console.log(totalPrice);
  //   }
  // }
  // return totalPrice;
  return arr.reduce((acc, curr) => acc + curr.price, 0);
}

console.log(calc(cart));
