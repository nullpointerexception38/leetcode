function minPathSum(grid) {
  const m = grid.length
  const n = grid[0].length
  const dp = (() => {
    const dp = new Map()
    const getKey = (row, col) => `${row}:${col}`
    return {
      get: (row, col) => dp.get(getKey(row, col)),
      set: (row, col, value) => dp.set(getKey(row, col), value)
    }
  })()
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const num = grid[i][j]
      const left = dp.get(i, j - 1)
      const top = dp.get(i - 1, j)
      const current = (() => {
        const hasLeft = typeof left !== 'undefined'
        const hasTop = typeof top !== 'undefined'
        if (hasLeft && hasTop) {
          return Math.min(left, top) + num
        }
        if (hasLeft) {
          return left + num
        }
        if (hasTop) {
          return top + num
        }
        return num
      })()
      dp.set(i, j, current)
    }
  }
  return dp.get(m - 1, n - 1)
}

console.log(minPathSum(
  [[1,3,1],[1,5,1],[4,2,1]]
))
