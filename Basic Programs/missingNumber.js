let arr = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11];

function missingNumber(arr) {
  let missing = null;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== diff) {
      missing = arr[i] + diff;
    }
  }
  return missing;
}
console.log(missingNumber(arr));
