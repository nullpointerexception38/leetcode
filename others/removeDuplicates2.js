function removeDuplicates(nums) {
  for (let i = 2; i < nums.length; i++) {
    const beforePrev = nums[i - 2]
    const prev = nums[i - 1]
    const current = nums[i]
    if (beforePrev === prev && prev === current) {
      nums.splice(i, 1)
      i--
    }
  }
  return nums.length
}

console.log(removeDuplicates(
  [1,1,2,2,3]
))
