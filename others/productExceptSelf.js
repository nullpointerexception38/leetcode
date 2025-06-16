function productExceptSelf(nums) {
  const { length } = nums
  const prefixProducts = []
  const suffixProducts = []
  let prefixProduct = 1
  let suffixProduct = 1
  for (let i = 0; i < length; i++) {
    prefixProduct *= nums[i]
    suffixProduct *= nums[length - 1 - i]
    prefixProducts.push(prefixProduct)
    suffixProducts.push(suffixProduct)
  }
  return nums.map((num, i) => {
    const prefix = prefixProducts[i - 1] ?? 1
    const suffix = suffixProducts[length - 1 - (i + 1)] ?? 1
    console.log({ num, i, prefix, suffix })
    return prefix * suffix
  })
}

console.log(productExceptSelf([1, 2, 3, 4]))
