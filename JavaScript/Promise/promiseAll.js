// Implement a deepClone function that can handle nested objects, arrays, and edge cases like Dates and RegExps.

// const obj={
//     firstName:"Abc",
//     lastName:"Cde",
//     address:[{pin:"231"}],
//     pin:"3042"
// };

// function deepCopy(obj){
//     const result=[];
//     for(let ob in obj){
//         if(typeof ob==='object'){
//             if(Array.isArray(ob)){

//             }
//             result.push(deepCopy(ob));
//         }else if(typeof ob==='number'){
//             result.push(ob);
//         }
//     }
//     return result;
// };

// console.log(deepCopy(obj));

// Recreate the behavior of Promise.all, which:Takes an array of promises (or values)Returns a new promise that:Resolves with an array of resolved values when all succeedRejects immediately if any promise rejects

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = new Promise((rej, r) => setTimeout(() => rej(3), 100));

const promiseArray = [p1, p2, p3];

function promiseAll(promiseArray) {
  let count = 0;
  return new Promise((res, rej) => {
    let resu = [];
    promiseArray.forEach((promise) => {
      Promise.resolve(promise)
        .then((data) => {
          count++;
          resu.push(data);
          if (promiseArray.length === count) {
            res(resu);
          }
        })
        .catch((error) => rej(error));
    });
  });
}

promiseAll(promiseArray).then((response) => console.log(response));
