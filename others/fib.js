function fib(n) {
  const dp = [0, 1]
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1]
  }
  return dp[n]
}

console.log(fib(3))
