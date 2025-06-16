function nthSuperUglyNumber(n, primes) {
  const { length } = primes
  const indexes = Array.from({ length }).fill(0)
  const dp = [1]
  for (let i = 1; i < n; i++) {
    let min = Number.MAX_SAFE_INTEGER
    for (let j = 0; j < length; j++) {
      min = Math.min(min, primes[j] * dp[indexes[j]])
    }
    dp[i] = min
    for (let j = 0; j < length; j++) {
      if (min === primes[j] * dp[indexes[j]]) {
        indexes[j]++
      }
    }
  }
  return dp[n - 1]
}

console.log(nthSuperUglyNumber(100000, [7,19,29,37,41,47,53,59,61,79,83,89,101,103,109,127,131,137,139,157,167,179,181,199,211,229,233,239,241,251]))

console.log(nthSuperUglyNumber(12, [2, 7, 13, 19]))
