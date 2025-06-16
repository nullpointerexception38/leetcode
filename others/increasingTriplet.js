console.log(increasingTriplet(
  [20, 100, 10, 12, 5, 13]
))

function increasingTriplet(nums) {
  let a = Infinity
  let b = Infinity
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (num > b) {
      return true
    }
    if (num < a) {
      a = num
    }
    else if (num > a) {
      b = num
    }
  }
  return false
}
