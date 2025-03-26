const arr = [1, 2, 0, 0, 3, 2, 0, 1, 2];

function moveZerosLast(nums) {
  let left = 0;
  let right = 0;

  if (nums.length < 2) return nums;

  for (; right < nums.length; right++) {
    if (nums[right] !== 0) {
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
    }
  }

  return nums;
}

console.log(moveZerosLast(arr));
