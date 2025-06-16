function numOfSubarrays(nums, k, threshold) {
  const min = k * threshold
  let sum = 0
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if (i > k - 1) {
      sum -= nums[i - k]
    }
    if (i >= k - 1 && sum >= min) {
      count++
    }
  }
  return count
}
