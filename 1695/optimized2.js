function maximumUniqueSubarray(nums) {
  const seen = new Uint8Array(10001)
  let left = 0
  let sum = 0
  let maxSum = 0
  for (const num of nums) {
    sum += num
    seen[num]++
    while (seen[num] > 1) {
      sum -= nums[left]
      seen[nums[left++]]--
    }
    maxSum = Math.max(maxSum, sum)
  }
  return maxSum
}
