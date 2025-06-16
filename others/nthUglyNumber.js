class MinHeap {
  constructor(heap) {
    this.heap = [...heap]
  }

  get lastIndex() {
    return this.size - 1
  }

  get size() {
    return this.heap.length
  }

  insert(num) {
    const { heap } = this
    heap.push(num)
    this._swim(this.lastIndex)
  }

  extractMin() {
    if (this.size === 0) {
      return -1
    }
    const { heap } = this
    const num = heap[0]
    heap[0] = heap[this.lastIndex]
    heap.length = this.size - 1
    this._sink(0)
    return num
  }

  _sink(index) {
    const { heap } = this
    const num = heap[index]
    const leftIndex = index * 2 + 1
    const rightIndex = index * 2 + 2
    const left = heap[leftIndex]
    const right = heap[rightIndex]
    const hasLeft = typeof left !== 'undefined'
    const hasRight = typeof right !== 'undefined'
    const hasBoth = hasLeft && hasRight
    if (hasBoth && num > right && num > left) {
      const swapIndex = left < right ? leftIndex : rightIndex
      this._swap(index, swapIndex)
      this._sink(swapIndex)
      this._swim(index)
    }
    else if (hasLeft && num > left) {
      this._swap(index, leftIndex)
      this._sink(leftIndex)
      this._swim(index)
    }
    else if (hasRight && num > right) {
      this._swap(index, rightIndex)
      this._sink(rightIndex)
      this._swim(index)
    }
  }

  _swim(index) {
    const { heap } = this
    const parentIndex = Math.floor((index - 1) / 2)
    const parent = heap[parentIndex]
    if (typeof parent === 'undefined') {
      return
    }
    if (heap[index] < parent) {
      this._swap(index, parentIndex)
      this._swim(parentIndex)
    }
  }

  _swap(i, j) {
    const { heap } = this
    ;[heap[i], heap[j]] = [heap[j], heap[i]]
  }
}

function nthUglyNumber(n) {
  if (n <= 4) {
    return n
  }
  const m = new MinHeap([2, 3, 5])
  const used = new Set()
  let min = -1
  for (let i = 4; i <= n + 2; i++) {
    const a = m.heap.slice(0, 3)
    const twos = a.map(num => num * 2)
    const threes = a.map(num => num * 3)
    const fives = a.map(num => num * 5)
    const rest = [...twos, ...threes, ...fives]
    rest.forEach(num => {
      if (!used.has(num)) {
        m.insert(num)
        used.add(num)
      }
    })
    min = m.extractMin()
  }
  return min
}

console.log(nthUglyNumber(17))
