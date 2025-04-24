let nums = [3, 2, 2, 3];

var removeElement = function (nums, val) {
  let result = nums.filter((item) => item !== val);
  return result;
};

console.log(removeElement(nums, 3));
