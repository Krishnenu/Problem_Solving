const arr = [3, 2, 1, 4, 5, 6, 7];

//iterate over the arr
//push the result of cb function
// return the result

Array.prototype.myMap = function (fn) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(fn(this[i], i, this));
  }
  return res;
};

console.log(arr.myMap((item, i, arr) => item * 2));
