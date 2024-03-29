/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let removeElement = function (nums, val) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      let temp = nums[i];
      nums[i] = nums[count];
      nums[count] = temp;
      count++;
    }
  }
  return count;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([1, 3, 2, 2, 3], 3));
