console.log(numberOfArithmeticSlices(
  [1,2,3,0,1,2,3]
))

function numberOfArithmeticSlices(nums) {
  const n = nums.length
  const arr = []
  let sum = 0
  let count = false
  for (let i = 2; i < n; i++) {
    if (nums[i - 2] - nums[i - 1] === nums[i - 1] - nums[i]) {
      sum += 1 + count
      count++
    }
    else {
      count = 0
    }
  }
  return sum
}
