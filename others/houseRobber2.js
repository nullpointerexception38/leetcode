function rob(nums) {
  const { length } = nums
  const getIndex = i => (i + length) % length
  const dp = []
  if (length === 0) {
    return 0
  }
  if (length < 4) {
    return Math.max(...nums)
  }
  let maxSum = 0
  for (let i = 0; i < length; i++) {
    const dp = Array.from({ length }).fill(0)
    dp[i] = nums[i]
    dp[getIndex(i - 1)] = -1
    dp[getIndex(i + 1)] = -1
    for (let j = i + 2; j < i + length - 1; j++) {
      let max = 0
      for (let k = j - 2; k >= i; k--) {
        const value = dp[getIndex(k)]
        if (value !== -1 && value > max) {
          max = value
        }
      }
      const _j = getIndex(j)
      const sum = max + nums[_j]
      dp[_j] = Math.max(sum, dp[_j])
    }
    const sum = Math.max(...dp)
    if (sum > maxSum) {
      maxSum = sum
    }
  }
  return maxSum
}

console.log(rob([4, 100, 2, 7, 5, 3]))
