/**
 * @param {number[][]} grid
 * @return {number}
 */
function matrixScore(grid) {
  const rowSize = grid.length
  for (let i = 0; i < rowSize; i++) {
    if (grid[i][0] === 0) {
      for (let j = 0; j < grid[i].length; j++) {
        grid[i][j] = grid[i][j] === 0 ? 1 : 0
      }
    }
  }
  const colSize = grid[0].length
  const half = Math.ceil(rowSize / 2)
  for (let j = 0; j < colSize; j++) {
    let count = 0
    for (let i = 0; i < rowSize; i++) {
      const value = grid[i][j]
      if (value === 1) {
        count++
      }
    }
    if (count < half) {
      for (let i = 0; i < rowSize; i++) {
        grid[i][j] = grid[i][j] === 0 ? 1 : 0
      }
    }
  }
  return grid.reduce((total, row) => {
    const str = row.map(col => String(col)).join('')
    return total + parseInt(str, 2)
  }, 0)
}
