/**
 * @param {number} n
 * @return {number}
 */
let climbStairs = function (n) {
  let prev = 0;
  let fib = 1;
  for (i = 1; i <= n; i++) {
    const temp = fib;
    fib = prev + fib;
    prev = temp;
  }
  return fib;
};

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
