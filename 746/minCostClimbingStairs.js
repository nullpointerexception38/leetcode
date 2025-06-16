function minCostClimbingStairs(cost) {
  const n = cost.length
  let dp2 = cost[n - 1]
  let dp1 = cost[n - 2]
  let current = 0
  for (let i = n - 2; i >= 0; i--) {
    current = (cost[i - 1] ?? 0) + Math.min(dp1, dp2)
    const temp = dp1
    dp1 = current
    dp2 = temp
  }
  return current
}
