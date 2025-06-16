console.log(uniquePaths(1, 10))

function uniquePaths(m, n) {
  const dp = Array.from({ length: m }, () => Array.from({ length: n }))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 1
      }
      else {
        dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
      }
    }
  }
  console.log(dp)
  return dp[m - 1][n - 1]
}
