class ProductOfNumbers {
  constructor() {
    this.nums = []
  }

  add(num) {
    this.nums.push(num)
  }

  getProduct(k) {
    const { nums } = this
    const { length } = nums
    let product = 1
    for (let i = 0; i < k; i++) {
      product *= nums[length - 1 - i]
    }
    return product
  }
}
