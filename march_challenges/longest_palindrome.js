let longestPalindrome = function (s) {
  let longestString = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 2; j++) {
      let left = i;
      let right = left + j;
      while (s[left] && s[left] === s[right]) {
        left -= 1;
        right += 1;
      }
      if (right - left - 1 > longestString.length) {
        longestString = s.slice(left + 1, right);
      }
    }
  }
  return longestString;
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
