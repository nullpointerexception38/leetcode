function change(amount, coins) {
  const dp = Array.from({ length: amount + 1 }).fill(0)
  dp[0] = 1
  for (const coin of coins) {
    for (let i = 0 ; i <= amount - coin; i++) {
      dp[i + coin] += dp[i]
    }
  }
  return dp[amount]
}
