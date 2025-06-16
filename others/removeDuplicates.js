function removeDuplicates(nums) {
  const used = new Map()
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (used.has(num)) {
      nums.splice(i, 1)
      i--
    }
    else {
      used.set(num, true)
    }
  }
  return nums.length
}
