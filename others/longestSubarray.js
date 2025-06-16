function longestSubarray(nums) {
  let zeros = 0
  let i = 0
  let max = 0
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] === 0) {
      zeros++
    }
    if (zeros > 1) {
      if (nums[i] === 0) {
        zeros--
      }
      i++
    }
    if (zeros <= 1) {
      max = Math.max(max, j - i)
    }
  }
  return max
}
