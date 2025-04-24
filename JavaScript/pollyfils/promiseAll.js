function makePromise() {
  let promiseArray = [];
  for (let i = 0; i < 2; i++) {
    promiseArray.push(
      new Promise((res, rej) => {
        setTimeout(() => {
          res(`Promise Resolved ${i}`);
        }, 2000);
      })
    );
  }
  return promiseArray;
}

const promises = makePromise();

/* Promise.all(promises).then((res)=>res.map((promise)=> console.log(promise))); */

function customPromise(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;

    promises.forEach((promise) => {
      promise
        .then((res) => {
          results.push(res);
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    });
  });
}

console.log(customPromise(promises).then((res) => console.log(res)));
