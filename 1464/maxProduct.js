console.log(maxProduct(
  [10,2,5,2]
))

function maxProduct(nums) {
  const n = nums.length
  let res = -Infinity
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      res = Math.max(res, (nums[i] - 1) * (nums[j] - 1))
    }
  }
  return res
}
