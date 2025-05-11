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
  let stack = [];
  const pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let ch of str) {
    if (ch === "(" || ch === "{" || ch === "[") {
      stack.push(ch);
    } else if (ch === ")" || ch === "}" || ch === "]") {
      if (stack.pop() !== pairs[ch]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(checkIsValidParenthesis(str));
