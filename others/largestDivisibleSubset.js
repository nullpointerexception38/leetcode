function largestDivisibleSubset(_nums) {
  const { length } = _nums
  const nums = _nums.slice().sort((a, b) => a - b)
  const dp = nums.map(() => [0, -1])
  let maxCount = 0
  let start = -1
  for (let i = length - 2; i >= 0; i--) {
    for (let j = i + 1; j < length; j++) {
      if (nums[j] % nums[i] !== 0) {
        continue
      }
      const [existedCount] = dp[i]
      const count = dp[j][0] + 1
      if (count > existedCount) {
        dp[i] = [count, j]
        if (count > maxCount) {
          maxCount = count
          start = i
        }
      }
    }
  }
  if (start === -1) {
    return nums.length > 0 ? [nums[0]] : []
  }
  const answer = []
  let index = start
  while (index !== -1) {
    answer.push(nums[index])
    index = dp[index][1]
  }
  return answer
}
