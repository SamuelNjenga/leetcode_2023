/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function (nums) {
  let i = 0;
  while (i < nums.length) nums[i] === nums[i + 2] ? nums.splice(i, 1) : i++;

  return nums.length;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
