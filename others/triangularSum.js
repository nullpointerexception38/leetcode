function triangularSum(nums) {
  const size = nums.length
  if (size === 1) {
    return nums[0]
  }
  const arr = []
  for (let i = 1; i < nums.length; i++) {
    const prev = nums[i - 1]
    const current = nums[i]
    arr.push((prev + current) % 10)
  }
  return triangularSum(arr)
}
