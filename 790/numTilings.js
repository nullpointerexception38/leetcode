console.log(numTilings(30))

function numTilings(n) {
  const dp = [1, 1, 2]
  const mod = 1_000_000_000 + 7
  if (n <= 2) {
    return dp[n]
  }
  for (let i = 3; i <= n; i++) {
    let num = (2 * dp[2] + dp[0]) % mod
    dp[0] = dp[1]
    dp[1] = dp[2]
    dp[2] = num
  }
  return dp[2]
}
