let productExceptSelf = function (nums) {
  let prefix = [];
  let posix = [];
  let result = [];

  //create prefix array
  for (let i = 0; i < nums.length; i++) {
    if (prefix[i - 1] === undefined) prefix[i] = nums[i] * 1;
    else prefix[i] = nums[i] * prefix[i - 1];
  }

  //create posix array
  for (let i = nums.length - 1; i >= 0; i--) {
    if (posix[i + 1] === undefined) posix[i] = nums[i] * 1;
    else posix[i] = nums[i] * posix[i + 1];
  }

  //generating result array
  for (let i = 0; i < nums.length; i++) {
    if (prefix[i - 1] === undefined) {
      // not prefix
      result[i] = posix[i + 1] * 1;
    } else if (posix[i + 1] === undefined) {
      //not posix
      result[i] = prefix[i - 1] * 1;
    } else {
      //have both prefix & posix
      result[i] = prefix[i - 1] * posix[i + 1];
    }
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
