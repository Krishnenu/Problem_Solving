let str = "hi, how are you?";

function revStrByWord(str) {
  let newStr = str.split(" ");
  return newStr
    .map((str) => {
      let res = "";
      for (let i = str.length - 1; i >= 0; i--) {
        res += str[i];
      }
      return res;
    })
    .join(" ");
}

console.log(revStrByWord(str));
