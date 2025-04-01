function promisDelay(dalay) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve("reolved promise");
    }, dalay)
  );
}

promisDelay(2000).then((response) => console.log(response));
