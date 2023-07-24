/**
 * @param {number} x
 * @return {number}
 */
let mySqrt = function (x) {
  let squareRoot = Math.floor(Math.sqrt(x));
  return squareRoot;
};

console.log(mySqrt(4));
console.log(mySqrt(8));
console.log(mySqrt(40));
console.log(mySqrt(49));
