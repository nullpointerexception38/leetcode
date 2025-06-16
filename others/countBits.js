function countBits(n) {
  const dp = Array.from({ length: n + 1 })
  dp[0] = 0
  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i & (i - 1)] + 1
  }
  return dp
}
