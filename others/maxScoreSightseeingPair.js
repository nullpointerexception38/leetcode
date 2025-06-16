console.log(maxScoreSightseeingPair(
  [1, 2]
))

function maxScoreSightseeingPair(nums) {
  const n = nums.length
  let maxIndex = 0
  let maxScore = 0
  for (let i = 1; i < n; i++) {
    const a = nums[maxIndex] + nums[i] - (i - maxIndex)
    const b = nums[i - 1] + nums[i] - 1
    maxIndex = b > a ? i - 1 : maxIndex
    maxScore = Math.max(maxScore, a, b)
  }
  return maxScore
}
