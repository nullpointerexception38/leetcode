class CountMap {
  constructor(nums) {
    this.map = new Map()
    for (const num of nums) {
      this.increase(num)
    }
  }
  get(num) {
    return this.map.get(num) ?? 0
  }
  increase(num) {
    this.map.set(num, this.get(num) + 1)
  }
  decrease(num) {
    this.map.set(num, this.get(num) - 1)
  }
}

class FindSumPairs {
  constructor(nums1, nums2) {
    this.nums1 = nums1
    this.nums2 = nums2
    this.countMap = new CountMap(nums2)
  }
  add(index, value) {
    const { nums2, countMap } = this
    if (index >= nums2.length) {
      return
    }
    countMap.decrease(nums2[index])
    nums2[index] += value
    countMap.increase(nums2[index])
  }
  count(target) {
    const { nums1, countMap } = this
    let sum = 0
    for (const num of nums1) {
      sum += countMap.get(target - num)
    }
    return sum
  }
}

const inputs = require('./input.js')
const params = require('./params.js')
let f
for (let i = 0; i < inputs.length; i++) {
  if (inputs[i] === 'FindSumPairs') {
    f = new FindSumPairs(...params[i])
    console.log(f)
  }
  else {
    f[inputs[i]].apply(f, params[i])
  }
}
console.log(f)
