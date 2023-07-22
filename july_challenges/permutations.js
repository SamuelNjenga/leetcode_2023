/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let permute = function (nums) {
  const output = [];

  let perm = (nums, res) => {
    if (res.length === nums.length) {
      if (new Set(res).size === nums.length) output.push(res);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      perm(nums, [...res, nums[i]]);
    }
  };

  perm(nums, []);

  return output;
};

console.log(permute([1, 2, 3, 4]));
