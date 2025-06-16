console.log(orangesRotting(
  [
    [2,1,1],
    [1,1,1],
    [0,1,2]
  ]
))

console.log(orangesRotting([
  [2,1,1],
  [0,1,1],
  [1,0,1]
]))

function orangesRotting(grid) {
  const m = grid.length
  const n = grid[0].length
  const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
  const rotten = grid.map(() => Array.from({ length: n }))
  const queue = []
  let limit = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        limit++
      }
      if (grid[i][j] === 2) {
        queue.push([i, j, 0])
        grid[i][j] = -1
        limit++
      }
    }
  }
  let maxMinutes = 0
  let count = 0
  while (queue.length > 0) {
    const [row, col, minutues] = queue.shift()
    maxMinutes = Math.max(maxMinutes, minutues)
    if (++count >= limit) {
      break
    }
    for (const [_row, _col] of directions) {
      const newRow = row + _row
      const newCol = col + _col
      if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && grid[newRow][newCol] === 1) {
        grid[newRow][newCol] = -1
        queue.push([newRow, newCol, minutues + 1])
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        return -1
      }
    }
  }
  return maxMinutes
}
