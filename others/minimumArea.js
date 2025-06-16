function minimumArea(grid) {
  let minI = Infinity
  let maxI = -Infinity
  let minJ = Infinity
  let maxJ = -Infinity
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const num = grid[i][j]
      if (num !== 1) {
        continue
      }
      if (i < minI) {
        minI = i
      }
      if (i > maxI) {
        maxI = i
      }
      if (j < minJ) {
        minJ = j
      }
      if (j > maxJ) {
        maxJ = j
      }
    }
  }
  return (maxI - minI + 1) * (maxJ - minJ + 1)
}

console.log(minimumArea(
  [
    [0,1,0],
    [1,1,1],
    [0,1,0]
  ]
))
