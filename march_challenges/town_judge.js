var findJudge = function (N, trust) {
  // Initialize array with 1..N
  // N + 1, so count is easier
  const counts = new Array(N + 1).fill(0);

  // Iterate through N people
  for (let [i, j] of trust) {
    // If the person trusts somebody, then it does not meet requirement 1
    counts[i] -= 1;

    // Count the people they trust
    counts[j] += 1;
  }

  // If N-1 exists, then its the judge since the judge trusts no one except themselves
  // and everyone else trusts the judge, then its N-1
  for (let i = 1; i < counts.length; i++) {
    if (N - 1 === counts[i]) {
      return i;
    }
  }

  return -1;
};
console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
    [3, 1],
  ])
);

console.log(
  findJudge(4, [
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [4, 3],
  ])
);
