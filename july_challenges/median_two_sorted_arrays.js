/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
let findMedianSortedArrays = function (nums1, nums2) {
  let nums = nums1.concat(nums2);
  nums.sort(function (a, b) {
    return a - b;
  });
  if (nums.length % 2 != 0) {
    return nums[Math.ceil(nums.length / 2) - 1].toFixed(5);
  } else {
    return (
      (nums[Math.ceil(nums.length / 2) - 1] +
        nums[Math.ceil(nums.length / 2)]) /
      2
    ).toFixed(5);
  }
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
