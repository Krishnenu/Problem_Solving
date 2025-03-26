let products = [
  { name: "phone", price: 800 },
  { name: "laptop", price: 1200 },
  { name: "tablet", price: 500 },
];

// [{ name: "laptop", price: 1200 }];

console.log(products.sort((a, b) => (a.name < b.name ? 1 : -1)));
