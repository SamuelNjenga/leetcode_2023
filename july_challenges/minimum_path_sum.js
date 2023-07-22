/**
 * @param {number[][]} grid
 * @return {number}
 */

let minPathSum = function (grid) {
  let row = grid.length; // Number of rows in the grid
  let col = grid[0].length; // Number of columns in the grid

  // Iterate over each cell in the grid
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i == 0 && j == 0) {
        // Skip the top-left corner cell
        continue;
      } else if (i == 0) {
        // Update the first row cells
        grid[i][j] += grid[i][j - 1];
      } else if (j == 0) {
        // Update the first column cells
        grid[i][j] += grid[i - 1][j];
      } else {
        // Update the remaining cells
        grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
      }
    }
  }
  // Return the minimum path sum from the bottom-right cell
  return grid[row - 1][col - 1];
};

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);

console.log(
  minPathSum([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
