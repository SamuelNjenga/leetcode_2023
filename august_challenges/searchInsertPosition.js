/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[nums.length - 1] < target) {
      return nums.length;
    }
    if (nums[i] > target) {
      return i;
    }
  }
};

console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 5));
