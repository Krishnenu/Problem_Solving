// Arsalan Adeeb
// 18:20
// // Uncomment these to check your work!
// const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
// const getDay = cycleIterator(threeDayWeekend);
// console.log(getDay()); // should log: 'Fri'
// console.log(getDay()); // should log: 'Sat'
// console.log(getDay()); // should log: 'Sun'
// Arsalan Adeeb
// 18:33
// function cycleIterator(array){
//   //array read operations CBR no need to create copy.
//   let calledValue = -1;
//   return function(){
//     calledValue++;
//     return array[calledValue%array.length];
//   }
// }
// Arsalan Adeeb
// 18:39 n
// 2666. Allow One Function Call
// leetcode

// function increment(){
//     let val = 0;
//     return () => ++val;
// }

// let i = increment();
// console.log(i());
// console.log(i());
// console.log(i());
// let j = increment();
// console.log(i());
// console.log(j());

// function oneCall(fn) {
//   let isexecuted = false;
//   return function () {
//     if (!isexecuted) {
//       isexecuted = true;
//       fn();
//       return "Function executed for the first time.";
//     }
//     return "function can be called only once:";
//   };
// }

// let once = oneCall(() => console.log("helow i am done!!"));
// console.log(once());
// console.log(once());
// console.log(once());

// function deBounce() {}

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i]), i, this);
  }
  return temp;
};

function throttle(func, wait) {
  let timer = null;
  return function (...args) {
    if (timer === null) {
      func(...args);
      timer = setTimeout(() => {
        timer = null;
      }, wait);
    } else {
      return;
    }
  };
}
