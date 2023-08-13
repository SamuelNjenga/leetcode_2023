/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let combinationSum = function (candidates, target) {
  let res = [];
  let temp = [];
  let iterate = (index, sum) => {
    if (sum > target) return;
    if (sum == target) {
      res.push([...temp]);
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      if (candidates[i] > target) continue;
      temp.push(candidates[i]);
      iterate(i, sum + candidates[i]);
      temp.pop();
    }
  };
  iterate(0, 0);
  return res;
};

console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([2, 3, 5], 8));
console.log(combinationSum([2], 1));
