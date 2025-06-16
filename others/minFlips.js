function minFlips(grid) {
  const height = grid.length
  const width = grid[0].length
  if (width === 1 || height === 1) {
    return 0
  }
  const colFlips = getColFlips(grid)
  const rowFlips = getRowFlips(grid)
  return Math.min(colFlips, rowFlips)
}

function getColFlips(grid) {
  const width = grid[0].length
  const height = grid.length
  const colEnd = Math.floor(width / 2)
  let count = 0
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < colEnd; j++) {
      const left = grid[i][j]
      const right = grid[i][width - 1 - j]
      if (left === 1 && right !== 1) {
        count++
      }
      else if (left !== 1 && right === 1) {
        count++
      }
    }
  }
  return count
}

function getRowFlips(grid) {
  const width = grid[0].length
  const height = grid.length
  const rowEnd = Math.floor(height / 2)
  let count = 0
  for (let j = 0; j < width; j++) {
    for (let i = 0; i < rowEnd; i++) {
      const top = grid[i][j]
      const bottom = grid[height - 1 - i][j]
      if (top === 1 && bottom !== 1) {
        count++
      }
      else if (top !== 1 && bottom === 1) {
        count++
      }
    }
  }
  return count
}

console.log(minFlips([
  [0,1],
  [0,1],
  [0,0]
]))
