/**
 * @param {Array} arr
 * @return {Generator}
 */
let inorderTraversal = function* (arr) {
  for (const n of arr) {
    if (Array.isArray(n)) {
      // recursive
      yield* inorderTraversal(n);
    } else {
      yield n;
    }
  }
};

const gen = inorderTraversal([1, [2, 3, [4, 7, 9]], 5]);
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // 4
console.log(gen.next().value); // 7
console.log(gen.next().value); // 9
console.log(gen.next().value); // 5
