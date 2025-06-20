function longestOnes(nums, k) {
  let zeros = 0
  let left = 0
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (num === 0) {
      zeros++
    }
    while (zeros > k) {
      if (nums[left++] === 0) {
        zeros--
      }
    }
    max = Math.max(max, i - left + 1)
  }
  return max
}
