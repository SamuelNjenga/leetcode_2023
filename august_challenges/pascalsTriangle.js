/**
 * @param {number} numRows
 * @return {number[][]}
 */
let generate = function (numRows) {
  let ans = [];
  for (let i = 0; i < numRows; i++) {
    let curr = [];
    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        curr.push(1);
      } else {
        curr.push(ans[i - 1][j - 1] + ans[i - 1][j]);
      }
    }
    ans.push(curr);
  }
  return ans;
};

console.log(generate(5));
