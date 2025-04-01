const user = {
  userName: "Krishnendu",
  welcomeMessage: function () {
    let user = "myname";
    console.log(`${this.userName},Welcome!! ${user}`);
    // console.log(this);
  },
};

user.welcomeMessage();
// user.userName = "hellow";
// user.welcomeMessage();
// console.log(this);

function test() {
  //   console.log(this);
  const user = "helllieiuri";
  console.log(user);
}

test();
