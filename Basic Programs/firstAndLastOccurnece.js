const arr = [2, 3, 4, 3, 2, 3, 3, 2, 2, 4];

function firstLastOccurence(arr, key) {
  let fp = -1;
  let sp = -1;
  for (let i = 0; i < arr.length; i++) {
    if (key === arr[i]) {
      if (fp === -1) {
        fp = i;
      }
      sp = i;
    }
  }
  return [fp, sp];
}

console.log(firstLastOccurence(arr, 9));
