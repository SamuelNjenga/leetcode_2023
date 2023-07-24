/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = function (digits) {
  return (BigInt(digits.join("")) + BigInt(1)).toString().split("");
  // (BigInt(digits.join("")) - Making string of the provided array, then making the string as an number(integer).
  // BigInt(1) - adding 1 to the number, wrapping it in BigInt as with BigInt we cant use any other datatype.
  // toString() - making a string out of number(integer), so that we could make array out of it.
  // split("") - creating an array of the string we made previously as the required answer is an array itself.
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9]));
