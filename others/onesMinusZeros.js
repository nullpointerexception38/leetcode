function onesMinusZeros(grid) {
  const onesRows = []
  const zerosRows = []
  const onesCols = []
  const zerosCols = []
  for (let i = 0; i < grid.length; i++) {
    onesRows[i] = 0
    zerosRows[i] = 0
    for (let j = 0; j < grid[i].length; j++) {
      if (typeof onesCols[j] === 'undefined') {
        onesCols[j] = 0
      }
      if (typeof zerosCols[j] === 'undefined') {
        zerosCols[j] = 0
      }
      const value = grid[i][j]
      if (value === 1) {
        onesRows[i] += 1
        onesCols[j] += 1
      } else {
        zerosRows[i] += 1
        zerosCols[j] += 1
      }
    }
  }
  const diff = []
  for (let i = 0; i < grid.length; i++) {
    diff.push(Array(grid[i].length).fill(0))
    for (let j = 0; j < grid[i].length; j++) {
      diff[i][j] = onesRows[i] + onesCols[j] - zerosRows[i] - zerosCols[j]
    }
  }
  return diff
}

onesMinusZeros([
  [0, 1, 1],
  [1, 0, 1],
  [0, 0, 1]
])

