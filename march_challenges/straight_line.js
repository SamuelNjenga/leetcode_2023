let checkStraightLine = function (coordinates) {
  let points = coordinates.length;
  let xdiff = (coordinates[1][0] - coordinates[0][0]);
  let ydiff = (coordinates[1][1] - coordinates[0][1]);
  let curr_xdiff, curr_ydiff;
  for (let i = 2; i < points; ++i) {
    curr_xdiff = (coordinates[i][0] - coordinates[i - 1][0]);
    curr_ydiff = (coordinates[i][1] - coordinates[i - 1][1]);
    if (ydiff * curr_xdiff != xdiff * curr_ydiff) {
      return false;
    }
  }
  return true;
};

console.log(
  checkStraightLine([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
  ])
);

console.log(
  checkStraightLine([
    [1, 1],
    [2, 2],
    [3, 4],
    [4, 5],
    [5, 6],
    [7, 7],
  ])
);

console.log(
  checkStraightLine([
    [1, -8],
    [2, -3],
    [1, 2],
  ])
);
