function numTrees(n) {
  const dp = [1, 1]
  return (function f(n) {
    if (typeof dp[n] !== 'undefined') {
      return dp[n]
    }
    let sum = 0
    for (let i = 0; i <= n - 1; i++) {
      sum += f(i) * f(n - i - 1)
    }
    dp[n] = sum
    return sum
  })(n)
}
