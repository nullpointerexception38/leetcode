function maxSubArray(nums) {
  const n = nums.length
  let prev = nums[0]
  let max = nums[0]
  for (let i = 1; i < n; i++) {
    const value = Math.max(0, prev) + nums[i]
    prev = value
    max = Math.max(max, value)
  }
  return max
}

console.log(maxSubArray([1]))
