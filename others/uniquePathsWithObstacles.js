function uniquePathsWithObstacles(obstacleGrid) {
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length
  const dp = new Map()
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const key = `${i}:${j}`
      if (obstacleGrid[i][j] === 1) {
        dp.set(key, 0)
        continue
      }
      if (i === 0 && j === 0) {
        dp.set(key, 1)
        continue
      }
      const topCount = dp.get(`${i - 1}:${j}`) ?? 0
      const leftCount = dp.get(`${i}:${j - 1}`) ?? 0
      dp.set(key, topCount + leftCount)
    }
  }
  const value = dp.get(`${m - 1}:${n - 1}`)
  return value === -1 ? 0 : value
}

console.log(uniquePathsWithObstacles(
  [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ]
))
