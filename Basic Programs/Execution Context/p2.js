// Create a function `hobbyTracker` that takes an array of hobbies as a parameter
// and creates a cache object with each hobby as a key.
// `hobbyTracker`
//  should return a function that takes a string representing the hobby and
//  an integer representing how many hours practiced as parameters.

// When
//  the returned function is invoked, it should update the cache object
// adding the value of the passed in integer to the cache at the key
// corresponding with the passed in 'hobby' then should return the updated

const updateHobbies = hobbyTracker(["yoga", "baking", "piano"]);
updateHobbies("yoga", 2);
updateHobbies("baking", 4);
// updateHobbies("yoga", 1);
// console.log(updateHobbies("piano", 2)); // --> { yoga: 3, baking: 4, piano: 2 }
console.log(updateHobbies()); // --> 'tracker has been reset!'
// console.log(updateHobbies("baking", 1)); // --> { yoga: 0, baking: 1, piano: 0}

function hobbyTracker(hobbies) {
  let hobbyToHourMap = {};
  for (let hobby of hobbies) {
    hobbyToHourMap[hobby] = 0;
  }
  return function (hobby, hour) {
    if (hobby === undefined || hour === undefined) {
      for (let hobby of hobbies) {
        hobbyToHourMap[hobby] = 0;
      }
      return "tracker has been reset!";
    } else {
      for (let hobby of hobbies) {
        if (hobby === hobby) {
          hobbyToHourMap[hobby] = hour;
        }
      }
    }
    return hobbyToHourMap;
  };
}

// console.log(hobbyTracker(["yoga", "baking", "piano"]));
