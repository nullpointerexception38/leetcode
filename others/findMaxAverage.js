function findMaxAverage(nums, k) {
  let sum = 0
  for (let i = 0; i < k; i++) {
    sum += nums[i]
  }
  let maxSum = sum
  for (let i = 1; i + k <= nums.length; i++) {
    sum = sum - nums[i - 1] + nums[i + k - 1]
    maxSum = Math.max(sum, maxSum)
  }
  return maxSum / k
}
