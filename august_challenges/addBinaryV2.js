/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
let addBinary = function (a, b) {
  let index = a.length > b.length ? a.length - 1 : b.length - 1;
  let rem = 0;
  let res = "";
  if (a.length > b.length) {
    let diff = a.length - b.length;
    for (let i = 0; i < diff; i++) {
      b = "0" + b;
    }
  } else if (a.length < b.length) {
    let diff = b.length - a.length;
    for (let i = 0; i < diff; i++) {
      a = "0" + a;
    }
  }

  while (index >= 0) {
    let num1 = parseInt(a[index]);
    let num2 = parseInt(b[index]);
    let sum = num1 + num2 + rem;
    res = (sum % 2) + res;
    rem = Math.floor(sum / 2);
    index--;
  }
  if (rem == 1) res = "1" + res;
  return res;
};

console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));