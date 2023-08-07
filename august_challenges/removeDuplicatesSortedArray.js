/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function (nums) {
  let j = 1,
    count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) count++;
    else count = 1;
    if (count <= 2) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
