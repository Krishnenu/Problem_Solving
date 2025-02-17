const arr = [1, 2, 3, 1, 2, 2, 1, 3, 4, 5, 6];
const array = [1, 3, 2, 4, 5];

// iterate over the Array;
// initialise accumulator with current value;
//if current value of accumulator ==0 then this[i] and not then cb(this[i],i,arr);

Array.prototype.myReduce = function (cb, initialVal) {
  let accumulator = initialVal;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i]) : this[i];
  }
  return accumulator;
};

console.log(array.myReduce((acc, cur) => acc + cur, 9));
