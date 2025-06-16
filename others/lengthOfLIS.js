function lengthOfLIS(nums) {
  const { length } = nums
  const dp = Array.from({ length }).fill(0)
  for (let i = length - 2; i >= 0; i--) {
    let max = 0
    let touched = false
    for (let j = i + 1; j < length; j++) {
      if (nums[i] < nums[j] && dp[j] >= max) {
        max = dp[j]
        touched = true
      }
    }
    dp[i] = touched ? max + 1 : 0
  }
  return Math.max(...dp) + 1
}
