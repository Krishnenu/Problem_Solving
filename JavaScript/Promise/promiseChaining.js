function time(delay, message) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(message);
    }, delay);
  });
}

time(3000, "delay 3 sec")
  .then((res) => {
    console.log(res);
    return time(2000, "delay 2 sec");
  })
  .then((res) => {
    console.log(res);
    return time(1000, "delay 1 sec");
  })
  .then((res) => {
    console.log(res);
    return time(5000, "delay 5 sec");
  })
  .then((res) => console.log(res));
