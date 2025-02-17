function oneCall(fn) {
  let isCalled = false;
  return function () {
    if (!isCalled) {
      fn();
      isCalled = true;
    } else return "cant call twice";
  };
}

let callme = oneCall(() => console.log("call me !!"));

callme();
callme();
console.log(callme());
