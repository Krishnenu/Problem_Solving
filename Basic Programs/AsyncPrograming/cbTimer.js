// function Provides delay for the cb operation;

function delayMessage(cb, delay) {
  setTimeout(cb, delay);
}

delayMessage(() => console.log("hellow"), 3000);
