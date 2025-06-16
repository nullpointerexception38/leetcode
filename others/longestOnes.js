function longestOnes(nums, k) {
  let zeros = 0
  let i = 0
  let ones = 0
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] === 0) {
      zeros++
    }
    if (zeros > k) {
      zeros = nums[i] === 0 ? zeros - 1 : zeros
      i++
    }
    if (zeros <= k) {
      ones = Math.max(ones, j - i + 1)
    }
  }
  return ones
}
