console.log(productExceptSelf([2,3,4,5]))

function productExceptSelf(nums) {
  const n = nums.length
  const products = Array({ length: n }).fill(1)
  for (let i = 1; i < n; i++) {
    products[i] = products[i - 1] * nums[i - 1]
  }
  let right = 1
  for (let i = n - 1; i >= 0; i--) {
    products[i] *= right
    right *= nums[i]
  }
  return products
}
