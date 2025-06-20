function maximumUniqueSubarray(nums) {
  const seen = new Set()
  let left = 0
  let sum = 0
  let maxSum = 0
  for (const num of nums) {
    sum += num
    while (seen.has(num)) {
      sum -= nums[left]
      seen.delete(nums[left++])
    }
    seen.add(num)
    maxSum = Math.max(maxSum, sum)
  }
  return maxSum
}
