/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let searchRange = function (nums, target) {
  let startPosition = 9999999;
  let endPosition = -9999999;

  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      if (i < startPosition) {
        startPosition = i;
      }
      if (i > endPosition) {
        endPosition = i;
      }
    }
  }
  if (startPosition === 9999999) {
    return [-1, -1];
  } else {
    return [startPosition, endPosition];
  }
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([], 0));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
