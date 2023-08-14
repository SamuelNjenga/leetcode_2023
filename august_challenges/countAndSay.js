/**
 * @param {number} n
 * @return {string}
 */
let countAndSay = function (n) {
  if (n == 1) return "1";
  else if (n == 2) return "11";
  let temp = countAndSay(n - 1);
  let result = "";
  let count = 0;
  for (let i = 0; i < temp.length; i++) {
    count++;
    if (temp[i] !== temp[i + 1]) {
      result += count;
      result += temp[i];
      count = 0;
    }
  }
  return result;
};

console.log(countAndSay(1));
console.log(countAndSay(2));
console.log(countAndSay(3));
console.log(countAndSay(4));
console.log(countAndSay(5));
console.log(countAndSay(6));

