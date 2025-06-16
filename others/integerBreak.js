function integerBreak(n) {
  const dp = [1, 1]
  for (let i = 2; i <= n; i++) {
    let max = 1
    const end = Math.floor(i / 2)
    for (let j = 1; j <= end; j++) {
      const num = Math.max(dp[j], j) * Math.max(dp[i - j], i - j)
      max = Math.max(max, num)
    }
    dp[i] = max
  }
  return dp[n]
}
