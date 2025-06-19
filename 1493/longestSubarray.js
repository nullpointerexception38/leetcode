function longestSubarray(nums) {
  let i = 0
  let lastZeroPos = -1
  let answer = 0
  for (let j = 0; j < nums.length; j++) {
    const num = nums[j]
    if (num === 0) {
      if (lastZeroPos !== -1) {
        i = lastZeroPos + 1
      }
      lastZeroPos = j
    }
    answer = Math.max(answer, j - i + 1 - (lastZeroPos === -1 ? 0 : 1))
  }
  return lastZeroPos === -1 ? answer - 1 : answer
}
