/**
 * @param {number} n
 * @return {Function} counter
 */

let createCounter = function (n) {
  let count = -1;
  return () => {
    return n + (count = count + 1);
  };
};

const counter = createCounter(10)
console.log(counter());
console.log(counter());
console.log(counter());
