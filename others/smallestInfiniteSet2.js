class SmallestInfiniteSet {
  constructor() {
    this.nums = Array.from({ length: 1000 }).map((_, i) => i + 1)
    this.used = new Set(this.nums)
  }

  addBack(num) {
    const { nums, used } = this
    if (used.has(num)) {
      return
    }
    used.add(num)
    nums.push(num)
    this._swim(nums.length - 1)
  }

  popSmallest() {
    const { nums } = this
    const [top] = nums
    this.used.delete(top)
    if (nums.length <= 1) {
      return nums.pop()
    }
    nums[0] = nums.pop()
    this._sink(0)
    return top
  }

  _swap(i, j) {
    const { nums } = this
    ;[nums[i], nums[j]] = [nums[j], nums[i]]
  }

  _getParentIndex(index) {
    return Math.floor((index - 1) / 2)
  }

  _swim(i) {
    const { nums } = this
    let index = i
    while (index > 0) {
      const parentIndex = this._getParentIndex(index)
      if (nums[index] >= nums[parentIndex]) {
        break
      }
      this._swap(index, parentIndex)
      index = parentIndex
    }
  }

  _sink(i) {
    const { nums } = this
    const { length } = nums
    let index = i
    while (index < length) {
      const leftIndex = 2 * index + 1
      const rightIndex = 2 * index + 2
      let childIndex = null
      if (rightIndex < length && nums[rightIndex] < nums[leftIndex]) {
        childIndex = rightIndex
      }
      else if (leftIndex < length) {
        childIndex = leftIndex
      }
      if (childIndex === null || nums[index] <= nums[childIndex]) {
        break
      }
      this._swap(index, childIndex)
      index = childIndex
    }
  }
}