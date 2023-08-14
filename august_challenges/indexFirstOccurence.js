/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
let strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    let temp = haystack.slice();
    let tempneedle = temp.slice(i, needle.length + i);
    if (tempneedle.length < needle.length) break;
    if (tempneedle === needle) return i;
  }
  return -1;
};

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));
