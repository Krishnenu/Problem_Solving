function makeCounter(initialValue) {
  // let count=initialValue-1;
  return () => initialValue++;

  // return ()=>{
  //     count=count+1;
  //     return count;
  // }
}

let val = makeCounter(5);

val();
val();

console.log(val());

function counterTicket(available) {
  return () => {
    if (available <= 0) {
      return "No ticket avalable";
    } else {
      available--;
      return "Ticket issued";
    }
  };
}

let ticket = counterTicket(2);

console.log(ticket());
console.log(ticket());
console.log(ticket());
console.log(ticket());
