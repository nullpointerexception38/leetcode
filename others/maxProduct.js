function maxProduct(nums) {
  const n = nums.length
  let max = nums[0]
  for (let i = 0; i < n; i++) {
    const source = nums[i]
    let sum = 1
    for (let j = i; j < n; j++) {
      sum *= nums[j]
      if (sum > max) {
        max = sum
      }
    }
  }
  return max
}
