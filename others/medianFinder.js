class MinBinaryHeap {
  constructor() {
    this.nums = []
  }

  get size() {
    return this.nums.length
  }

  get top() {
    return this.nums[0]
  }

  add(num) {
    this.nums.push(num)
    this._swim(this.size - 1)
  }

  removeTop() {
    if (this.nums.length === 1) {
      this.nums.length = 0
      return
    }
    const last = this.nums.pop()
    this.nums[0] = last
    this._sink(0)
  }

  _swap(i, j) {
    const { nums } = this
    ;[nums[i], nums[j]] = [nums[j], nums[i]]
  }

  _swim(index) {
    const parentIndex = this._getParentIndex(index)
    if (parentIndex === -1) {
      return
    }
    if (this.nums[index] < this.nums[parentIndex]) {
      this._swap(index, parentIndex)
      this._swim(parentIndex)
    }
  }

  _sink(index) {
    const leftIndex = 2 * index + 1
    const rightIndex = 2 * index + 2
    const num = this.nums[index]
    const left = this.nums[leftIndex]
    const right = this.nums[rightIndex]
    const hasLeft = typeof left !== 'undefined'
    const hasRight = typeof right !== 'undefined'
    const greaterThanLeft = hasLeft && num > left
    const greaterThanRight = hasRight && num > right
    if (hasLeft && hasRight && greaterThanLeft && greaterThanRight) {
      if (left < right) {
        this._swap(index, leftIndex)
        this._sink(leftIndex)
      }
      else {
        this._swap(index, rightIndex)
        this._sink(rightIndex)
      }
    }
    else if (hasLeft && greaterThanLeft) {
      this._swap(index, leftIndex)
      this._sink(leftIndex)
    }
    else if (hasRight && greaterThanRight) {
      this._swap(index, rightIndex)
      this._sink(rightIndex)
    }
  }

  _getParentIndex(index) {
    if (index === 0) {
      return -1
    }
    return Math.floor((index - 1) / 2)
  }
}

class MaxBinaryHeap {
  constructor() {
    this.nums = []
  }

  get size() {
    return this.nums.length
  }

  get top() {
    return this.nums[0]
  }

  add(num) {
    this.nums.push(num)
    this._swim(this.size - 1)
  }

  removeTop() {
    if (this.nums.length === 1) {
      this.nums.length = 0
      return
    }
    const last = this.nums.pop()
    this.nums[0] = last
    this._sink(0)
  }

  _swap(i, j) {
    const { nums } = this
    ;[nums[i], nums[j]] = [nums[j], nums[i]]
  }

  _swim(index) {
    const parentIndex = this._getParentIndex(index)
    if (parentIndex === -1) {
      return
    }
    if (this.nums[index] > this.nums[parentIndex]) {
      this._swap(index, parentIndex)
      this._swim(parentIndex)
    }
  }

  _sink(index) {
    const leftIndex = 2 * index + 1
    const rightIndex = 2 * index + 2
    const num = this.nums[index]
    const left = this.nums[leftIndex]
    const right = this.nums[rightIndex]
    const hasLeft = typeof left !== 'undefined'
    const hasRight = typeof right !== 'undefined'
    const lessThanLeft = hasLeft && num < left
    const lessThanRight = hasRight && num < right
    if (hasLeft && hasRight && lessThanLeft && lessThanRight) {
      if (left > right) {
        this._swap(index, leftIndex)
        this._sink(leftIndex)
      }
      else {
        this._swap(index, rightIndex)
        this._sink(rightIndex)
      }
    }
    else if (hasLeft && lessThanLeft) {
      this._swap(index, leftIndex)
      this._sink(leftIndex)
    }
    else if (hasRight && lessThanRight) {
      this._swap(index, rightIndex)
      this._sink(rightIndex)
    }
  }

  _getParentIndex(index) {
    if (index === 0) {
      return -1
    }
    return Math.floor((index - 1) / 2)
  }
}

class MedianFinder {
  constructor() {
    this.mid = null
    this.left = new MaxBinaryHeap()
    this.right = new MinBinaryHeap()
  }

  get size() {
    const extra = this.mid === null ? 0 : 1
    return this.left.size + this.right.size + extra
  }

  addNum(num) {
    const { mid, size, left, right } = this
    if (size === 0) {
      this.mid = num
    }
    else if (size % 2 === 0) {
      if (left.top <= num && num <= this.right.top) {
        this.mid = num
      }
      else if (num < left.top) {
        this.mid = left.top
        left.removeTop()
        left.add(num)
      }
      else if (num > this.right.top) {
        this.mid = right.top
        right.removeTop()
        right.add(num)
      }
    }
    else {
      if (num <= mid) {
        left.add(num)
        right.add(mid)
      }
      else {
        this.left.add(mid)
        this.right.add(num)
      }
      this.mid = null
    }
  }

  findMedian() {
    const { mid } = this;
    if (mid !== null) {
      return mid
    }
    return (this.left.top + this.right.top) / 2
  }
}
