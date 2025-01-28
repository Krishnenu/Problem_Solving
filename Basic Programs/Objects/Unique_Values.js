let numbers = [1, 2, 2, 3, 4, 4, 5];

// [1, 2, 3, 4, 5]

function removeDuplicates(arr) {
  //   return arr.filter((item, index, arr) => arr.indexOf(item) === index);
  //   let s = new Set(arr);
  //   return s;

  return arr.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
}

console.log(removeDuplicates(numbers));
