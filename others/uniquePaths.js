function uniquePaths(m, n) {
  const dp = new Map()
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const key = `${i}:${j}`
      if (i === 0 || j === 0) {
        dp.set(key, 1)
        continue
      }
      const count = dp.get(`${i - 1}:${j}`) + dp.get(`${i}:${j - 1}`)
      dp.set(key, count)
    }
  }
  return dp.get(`${m - 1}:${n - 1}`)
}
