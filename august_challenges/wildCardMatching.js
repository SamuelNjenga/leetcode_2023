/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
let isMatch = function (s, p) {
  let i = 0,
    j = 0;
  let starIdx = -1,
    pointer = -1;

  while (i < s.length) {
    if ((j < p.length && s[i] === p[j]) || p[j] === "?") {
      i++;
      j++;
    } else if (j < p.length && p[j] === "*") {
      starIdx = j;
      pointer = i;
      j++;
    } else if (starIdx === -1) return false;
    else {
      j = starIdx + 1;
      i = pointer + 1;
      pointer = i;
    }
  }
  for (let idx = j; idx < p.length; idx++) {
    if (p[idx] !== "*") return false;
  }
  return true;
};

console.log(isMatch("a", "aa"));
console.log(isMatch("aa", "*"));
console.log(isMatch("cb", "?a"));
