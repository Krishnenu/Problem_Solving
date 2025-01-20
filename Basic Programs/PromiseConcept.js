function fetchmy(arg) {
  const res = "h";
  const h = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arg);
    }, 3000);
  });

  // h.then((res)=>res=res);
  return h;
}

console.log(fetchmy("hellow"));

console.log("hellow\nholla");

const p = new Promise((res, rej) => {
  setTimeout(() => {
    res([]);
    console.log("promise Resolved");
  }, 1000);
});

p.then((r) => console.log(r));
