/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
let merge = function (intervals) {
  if (!intervals.length) return [];
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (let [start, end] of intervals) {
    let lastEnd = result[result.length - 1][1];
    if (start <= lastEnd) result[result.length - 1][1] = Math.max(end, lastEnd);
    else result.push([start, end]);
  }
  return result;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);

console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
);

console.log(
  merge([
    [2, 3],
    [1, 5],
  ])
);

console.log(
  merge([
    [2, 3],
    [1, 5],
    [9, 12],
    [3, 4],
  ])
);

console.log(
  merge([
    [2, 3],
    [8, 15],
    [9, 12],
    [3, 4],
  ])
);
