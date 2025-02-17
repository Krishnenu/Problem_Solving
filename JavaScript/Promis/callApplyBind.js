const objIntro = {
  name: "Krish",
  city: "Muz",
};

function sayIntro(age) {
  console.log(`name is ${this.name}, place is ${this.city} and age is ${age}`);
}

Function.prototype.myCall = function (context, ...args) {
  context.Function = this;
  context.Function(...args);
};

sayIntro.myCall(objIntro, "cognizant");
