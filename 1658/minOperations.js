function minOperations(nums, x) {
  const n = nums.length
  const total = nums.reduce((sum, num) => sum + num, 0)
  const k = total - x
  if (k < 0) {
    return -1
  }
  let sum = 0
  let left = 0
  let max = -Infinity
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    while (sum > k) {
      sum -= nums[left++]
    }
    if (sum === k) {
      max = Math.max(max, i - left + 1)
    }
  }
  return max === -Infinity ? -1 : n - max
}
