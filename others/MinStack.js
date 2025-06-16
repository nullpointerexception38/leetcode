class MinStack {
  constructor() {
    this.nums = []
    this.min = null
  }
  push(value) {
    const { nums } = this
    nums.push(value)
    this.setMin()
  }
  pop() {
    const value = this.nums.pop()
    this.setMin()
    return value
  }
  top() {
    const { nums } = this
    return nums[nums.length - 1]
  }
  getMin() {
    return this.min
  }
  setMin() {
    this.min = Math.min(...this.nums)
  }
}
