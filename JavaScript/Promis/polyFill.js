function makeArrayOfPromises(n) {
  const promiseArray = [];
  for (let i = 0; i < n; i++) {
    if (i === 5) {
      promiseArray.push(
        new Promise((res, rej) => rej(`${i + 1} Promise number`))
      );
    } else
      promiseArray.push(
        new Promise((res, rej) => res(`${i + 1} Promise number`))
      );
  }
  return promiseArray;
}
const promiseArray = makeArrayOfPromises(10);

// console.log(makeArrayOfPromises(10));

Promise.myAllSettled = function (promiseArray) {
  return new Promise((resolve) => {
    const results = new Array(promiseArray.length);
    let settledCount = 0;
    if (promiseArray.length === 0) {
      resolve([]);
    }
    promiseArray.forEach((promise, index) => {
      let handlePromises = (valueOrReason, isFullfield) => {
        results[index] = isFullfield
          ? { status: "fullfield", value: valueOrReason }
          : { status: "Rejected", value: valueOrReason };
        settledCount++;
        if (settledCount === promiseArray.length) resolve(results);
      };

      promise.then(
        (value) => handlePromises(value, true),
        (reason) => handlePromises(reason, false)
      );
    });
  });
};

Promise.myAllSettled(promiseArray).then((results) => console.log(results));
