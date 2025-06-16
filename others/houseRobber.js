function rob(nums) {
  const { length } = nums
  const dp = nums.slice()
  for (let i = 0; i < length; i++) {
    for (let j = i + 2; j < length; j++) {
      const sum = dp[i] + nums[j]
      dp[j] = sum > dp[j] ? sum : dp[j]
    }
  }
  return length === 0 ? 0 : Math.max(...dp)
}
