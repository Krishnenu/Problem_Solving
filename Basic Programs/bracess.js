// function isBalanced(str) {
//   let stack = [];
//   const pairs = {
//     ")": "(",
//     "}": "{",
//     "]": "[",
//   };

//   for (let braces of str) {
//     if (braces === "(" || braces === "{" || braces === "[") {
//       stack.push(braces);
//     } else if (braces === ")" || braces === "}" || braces === "]") {
//       if (braces.length === 0 || stack.pop() !== pairs[braces]) {
//         return false;
//       }
//     }
//   }
//   if (stack.length === 0) {
//     return true;
//   }

//   throw "Not implemented!";
// }

// console.log(isBalanced("()"));
// console.log(isBalanced("{[()]}"));
// console.log(isBalanced("{[(])}"));
// console.log(isBalanced("(([]){})"));
// console.log(isBalanced("([)]"));

let str = "[({})]{";

function checkIsValidParenthesis(str) {
  const pairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  let res = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      res.push(str[i]);
    } else if (str[i] === ")" || str[i] === "}" || str[i] === "]") {
      if (res.pop() === pairs[str[i]]) {
        return false;
      }
    }
  }
  return res.length === 0;
}

console.log(checkIsValidParenthesis(str));
