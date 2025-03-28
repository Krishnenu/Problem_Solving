// Create a function cycle Iterator that accepts an array, and returns a function. The returned function will accept zero arguments.
// When first invoked, the returned function will return the first element
// of the array. When invoked a second time, the returned function will
// return the second element of the array, and so forth. After returning
// the last element of the array, the next invocation will return the first
//  element of the array again, and continue on with the second after that,
//  and so far.

// let arr = [2, 3, 1, 3, 2, 1, 3, 4];

// op [2] [2,3] [2,3,1].........[2];

const threeDayWeekend = ["Fri", "Sat", "Sun"];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'S
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay());
console.log(getDay());
console.log(getDay());
console.log(getDay());

function cycleIterator(threeDayWeekend) {
  let len = threeDayWeekend.length;
  let day = 0;

  return function () {
    if (day >= len) {
      day = 0;
    }
    day = day + 1;
    return threeDayWeekend[day - 1];
  };
}

function cycleIterator(array) {
  //array read operations CBR no need to create copy.
  let calledValue = -1;
  return function () {
    calledValue++;
    return array[calledValue % array.length];
  };
}
