let removeKdigits = function (num, k) {
  let stack = [];

  for (let n of num) {
    while (k >= 1 && stack.length && stack[stack.length - 1] > n) {
      stack.pop();
      k--;
    }

    stack.push(n);
  }

  while (k > 0) {
    stack.pop();
    k--;
  }

  while (stack[0] == "0") {
    stack.shift();
  }

  if (stack.length == 0) {
    stack.push("0");
  }

  return stack.join("");
};

console.log(removeKdigits("1432219", 3));
console.log(removeKdigits("1001", 2));
console.log(removeKdigits("123", 2));
console.log(removeKdigits("123", 3));
console.log(removeKdigits("1230987", 2));
console.log(removeKdigits("1230987", 3));
console.log(removeKdigits("282", 1));
