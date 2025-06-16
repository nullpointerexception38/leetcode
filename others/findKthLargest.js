class MaxBinaryHeap {
  constructor(nums) {
    this.nodes = []
    nums.forEach(num => {
      this.insert(num)
    })
  }

  get top() {
    return this.nodes[0]
  }

  get last() {
    return this.nodes[this.lastIndex]
  }

  get size() {
    return this.nodes.length
  }

  get lastIndex() {
    return this.size - 1
  }

  get(index) {
    return this.nodes[index]
  }

  insert(num) {
    this.nodes.push(num)
    this._swim(this.lastIndex)
  }

  remove(index) {
    this.nodes[index] = this.last
    this.nodes.length -= 1
    this._sink(index)
  }

  _swim(index) {
    const { nodes } = this
    const parentIndex = this._getParentIndex(index)
    const node = nodes[index]
    const parent = nodes[parentIndex]
    if (typeof parent === 'undefined') {
      return
    }
    if (node > parent) {
      this._swap(index, parentIndex)
      this._swim(parentIndex)
    }
  }

  _sink(index) {
    const { nodes } = this
    const node = nodes[index]
    const leftIndex = 2 * index + 1
    const rightIndex = 2 * index + 2
    const left = nodes[leftIndex]
    const right = nodes[rightIndex]
    const hasLeft = typeof left !== 'undefined'
    const hasRight = typeof right !== 'undefined'
    const childIndex = (() => {
      if (hasLeft && hasRight) {
        return left > right ? leftIndex : rightIndex
      }
      if (hasLeft) {
        return leftIndex
      }
      if (hasRight) {
        return rightIndex
      }
      return -1
    })()
    const child = nodes[childIndex]
    if (typeof child !== 'undefined' && child > node) {
      this._swap(index, childIndex)
      this._swim(index)
      this._sink(childIndex)
    }
  }

  _getParentIndex(index) {
    return Math.floor((index - 1) / 2)
  }

  _swap(i, j) {
    const { nodes } = this
    ;[nodes[i], nodes[j]] = [nodes[j], nodes[i]]
  }
}

function findKthLargest(nums, k) {
  const heap = new MaxBinaryHeap(nums)
  let i = 1
  let node = heap.top
  let index = 0
  while (i < k) {
    heap.remove(0)
    node = heap.top
    i++
  }
  return node
}

console.log(findKthLargest(
  [-1,2,0],
  2
))
