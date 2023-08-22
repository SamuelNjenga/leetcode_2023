/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

let combine = function (n, k) {
  let result = [];
  function dfs(index, current) {
    if (current.length === k) {
      result.push([...current]);
    }
    for (let i = index; i <= n; i++) {
      current.push(i);
      dfs(i + 1, current);
      current.pop();
    }
  }

  dfs(1, []);
  return result;
};

console.log(combine(4, 2));
console.log(combine(1, 1));
