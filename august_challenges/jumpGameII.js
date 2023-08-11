/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = (nums) => {
  let maxReach = 0;
  let steps = 0;
  let oldMove = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    maxReach = Math.max(maxReach, i + nums[i]);

    if (i == oldMove) {
      steps++;
      oldMove = maxReach;
    }
  }

  return steps;
};

console.log(jump([2, 3, 1, 1, 4]));
console.log(jump([2, 3, 0, 1, 4]));
console.log(jump([2, 3, 0, 1, 1, 10, 11]));
