const arr = [1, 2, 3, 4, 5, 6, 3, 4, 5];

// iterate over the Array
// check if cb returns true;
// push if cb returns true;

Array.prototype.myFilter = function (cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) res.push(this[i]);
  }
  return res;
};

console.log(arr.filter((item, i, arr) => arr.indexOf(item) === i));
