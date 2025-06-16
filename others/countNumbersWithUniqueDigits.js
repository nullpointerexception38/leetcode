function countNumbersWithUniqueDigits(n) {
  if (n > 10) {
    return 0
  }
  const dp = [1]
  for (let i = 1; i <= n; i++) {
    let product = 1
    for (let j = 0; j < i; j++) {
      product *= j <= 1 ? 9 : (9 - j + 1)
    }
    dp[i] = product + dp[i - 1]
  }
  return dp[n]
}
