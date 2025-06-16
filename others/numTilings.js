function numTilings(n) {
  const max = 1e9 + 7
  const dp = [1, 1, 2]
  if (n <= 2) {
    return dp[n]
  }
  let num = -1
  for (let i = 3; i <= n; i++) {
    num = ((2 * dp[2]) + dp[0]) % max
    dp[0] = dp[1]
    dp[1] = dp[2]
    dp[2] = num
  }
  return num
}
