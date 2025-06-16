function removeDuplicates(nums, val) {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (num === val) {
      nums.splice(i, 1)
      i--
    }
  }
  return nums.length
}
