function minCostClimbingStairs(costs) {
  const n = costs.length
  const dp = []
  dp[n - 1] = costs[n - 1]
  dp[n - 2] = costs[n - 2]
  for (let i = n - 3; i >= 0; i--) {
    dp[i] = costs[i] + Math.min(dp[i + 1], dp[i + 2])
  }
  return Math.min(dp[0], dp[1])
}
