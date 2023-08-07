/**
 * @param {string} s
 * @return {boolean}
 */

let isNumber = function (s) {
  const k = +s;
  if (s == "Infinity" || s == "-Infinity" || s == "+Infinity") {
    return false;
  }
  if (isNaN(k)) {
    return false;
  }
  return true;
};

console.log("1", isNumber("0"));
console.log("2", isNumber("e"));
console.log("3", isNumber("."));
console.log("4", isNumber("95a54e53"));
console.log("5", isNumber("99e2.5"));
console.log("6", isNumber("--6"));
console.log("7", isNumber("53.5e93"));
console.log("8", isNumber("+6e-1"));
console.log("9", isNumber("2e10"));
console.log("10", isNumber("-.9"));
console.log("11", isNumber("4."));
console.log("12", isNumber("abc"));
console.log("13", isNumber("0089"));
