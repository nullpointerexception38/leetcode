console.log(countFairPairs(
  [0,0,0,0,0], 0, 0
))

function countFairPairs(nums, lower, upper) {
  const n = nums.length
  nums.sort((a, b) => a - b)
  const count = limit => {
    let i = 0
    let j = n - 1
    let count = 0
    for (let i = 0, j = n - 1; i < j; i++) {
      while (i < j && nums[i] + nums[j] > limit) {
        j--
      }
      count += j - i
    }
    return count
  }
  return count(upper) - count(lower - 1)
}
