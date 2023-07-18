/**
 * @return {Generator<number>}
 */
let fibGenerator = function* () {
  let n1 = 0,
    n2 = 1;
  while (true) {
    yield n1;
    let tmp = n2;
    n2 = n1 + n2;
    n1 = tmp;
  }
};

const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
