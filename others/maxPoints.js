console.log(maxPoints(
  [
    [2,7,4],
    [3,1,1]
  ]
))

function maxPoints(points) {
  const n = points.length
  const m = points[0].length
  const dp = points[0]
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[j] = Math.max(dp[j], dp[j - 1] - 1)
    }
    let right = dp[m - 1]
    dp[m - 1] = points[i][m - 1] + right
    for (let k = m - 2; k >= 0; k--) {
      right = Math.max(dp[k], right - 1)
      dp[k] = points[i][k] + right
    }
  }
  return Math.max(...dp)
}
