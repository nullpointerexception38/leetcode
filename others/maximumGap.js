console.log(maximumGap(
  [3,6,9,1]
))

function maximumGap(nums) {
  const { length } = nums
  if (length === 1) {
    return 0
  }
  const sortedNums = nums.slice().sort((a, b) => a - b)
  let max = 0
  for (let i = 1; i < length; i++) {
    const diff = sortedNums[i] - sortedNums[i - 1]
    if (diff > max) {
      max = diff
    }
  }
  return max
}
