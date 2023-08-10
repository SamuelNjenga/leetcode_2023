/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
let addBinary = function (a, b) {
  const sum = BigInt(`0b${a}`) + BigInt(`0b${b}`); // sum of two numbers, using BigInt as they might be big integers
  return sum.toString(2); // convers binary to integer and returns it
};

console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));
