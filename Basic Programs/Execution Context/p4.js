function hello() {
  // name = this.name;
  setTimeout(function () {
    console.log(this.name);
  }, 100);
}
hello.call({ name: "tom" });
