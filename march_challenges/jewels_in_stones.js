let numJewelsInStones = (jewels, stones) => {
  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    for (let j = 0; j < stones.length; j++) {
      if (stones[j] === jewels[i]) {
        count++;
      }
    }
  }
  return count;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("z", "ZZ"));
