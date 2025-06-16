function minDistance(word1, word2) {
  const m = word1.length + 1
  const n = word2.length + 1
  const dp = Array.from({ length: m }, () => Array(n).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0) {
        dp[i][j] = j
      }
      else if (j === 0) {
        dp[i][j] = i
      }
      else {
        const extra = word1[i - 1] === word2[j - 1] ? 0 : 1
        dp[i][j] = Math.min(dp[i][j - 1] + 1, dp[i - 1][j] + 1, dp[i - 1][j - 1] + extra)
      }
    }
  }
  return dp[m - 1][n - 1]
}
