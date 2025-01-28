const arr = [-5, -2, -1, 0, 2, 2, 4];

function getProductOfLargestthree(arr) {
  let last = arr.length - 1;
  let first = 0;
  let second = 0;
  let third = 0;

  if (arr[0] * arr[1] > arr[last] * arr[last - 1]) {
    first = arr[0];
    second = arr[1];
    third = arr[last];
  }

  if (arr[0] * arr[1] < arr[last] * arr[last - 1]) {
    first = arr[last];
    second = arr[last - 1];
    third = arr[last - 2];
  }

  return first * second * third;
}

console.log(getProductOfthreeLargest(arr));

// 2nd approch
function getProductOfLargestThree(arr) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  const n = arr.length;

  // The maximum product can be either:
  // - The product of the three largest numbers
  // - The product of the two smallest numbers (negative) and the largest number
  const product1 = arr[n - 1] * arr[n - 2] * arr[n - 3];
  const product2 = arr[0] * arr[1] * arr[n - 1];

  // Return the maximum of the two
  return Math.max(product1, product2);
}

console.log(getProductOfLargestThree(arr)); // Output: 16

// solve if not sorted:
