class MinHeap {
  constructor() {
    this.heap = []
  }

  get root() {
    return this.heap[0]
  }

  get size() {
    return this.heap.length
  }

  get lastIndex() {
    return this.size - 1
  }

  add(num) {
    this.heap.push(num)
    this._swim(this.lastIndex)
  }

  remove(index) {
    const { heap } = this
    heap[index] = heap[this.lastIndex]
    heap.length = this.size - 1
    this._sink(index)
  }

  deleteValue(num) {
    const index = this.heap.indexOf(num)
    if (index !== -1) {
      this.remove(index)
    }
  }

  _getParentIndex(index) {
    const isEven = index % 2 === 0
    const value = isEven ? 2 : 1
    return (index - value) / 2
  }

  _swim(index) {
    const { heap } = this
    const current = heap[index]
    const parentIndex = this._getParentIndex(index)
    const parent = heap[parentIndex]
    if (typeof parent === 'undefined') {
      return
    }
    if (current < parent) {
      [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]]
      this._swim(parentIndex)
    }
  }

  _sink(index) {
    const { heap } = this
    const current = heap[index]
    const leftIndex = 2 * index + 1
    const rightIndex = 2 * index + 2
    const left = heap[leftIndex]
    const right = heap[rightIndex]
    const hasLeft = typeof left !== 'undefined'
    const hasRight = typeof right !== 'undefined'
    if (hasLeft && hasRight && current > left && current > right) {
      const swapIndex = left < right ? leftIndex : rightIndex
      ;[heap[index], heap[swapIndex]] = [heap[swapIndex], heap[index]]
      this._sink(swapIndex)
      this._swim(index)
    }
    else if (hasLeft && current > left) {
      [heap[index], heap[leftIndex]] = [heap[leftIndex], heap[index]]
      this._sink(leftIndex)
      this._swim(index)
    }
    else if (hasRight && current > right) {
      [heap[index], heap[rightIndex]] = [heap[rightIndex], heap[index]]
      this._sink(rightIndex)
      this._swim(index)
    }
  }
}

class NumberContainers {
  constructor() {
    this.numToIndexMap = new Map()
    this.indexToNumMap = new Map()
  }

  change(index, number) {
    this.deleteExistedIndex(index, number)
    const indexHeap = this.getIndexHeap(number)
    indexHeap.add(index)
    this.numToIndexMap.set(number, indexHeap)
    this.indexToNumMap.set(index, number)
  }

  find(number) {
    const indexHeap = this.getIndexHeap(number)
    return indexHeap.root ?? -1
  }

  deleteExistedIndex(index, number) {
    const previousNumber = this.indexToNumMap.get(index)
    if (typeof previousNumber === 'undefined') {
      return
    }
    const indexHeap = this.getIndexHeap(previousNumber)
    indexHeap.deleteValue(index)
    if (indexHeap.size === 0) {
      this.numToIndexMap.delete(previousNumber)
    } else {
      this.numToIndexMap.set(previousNumber, indexHeap)
    }
  }

  getIndexHeap(number) {
    return this.numToIndexMap.get(number) ?? new MinHeap()
  }
}
