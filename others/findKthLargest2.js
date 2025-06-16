function findKthLargest(nums, k) {
  const heap = []
  const swim = () => {
    let index = heap.length - 1
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2)
      if (heap[index] >= heap[parentIndex]) {
        break
      }
      ;[heap[index], heap[parentIndex]] = [heap[parentIndex], heap[index]]
      index = parentIndex
    }
  }
  const sink = () => {
    const { length } = heap
    let index = 0
    while (index < length) {
      const leftIndex = 2 * index + 1
      const rightIndex = 2 * index + 2
      let childIndex = null
      if (rightIndex < length && heap[rightIndex] < heap[leftIndex]) {
        childIndex = rightIndex
      }
      else if (leftIndex < length) {
        childIndex = leftIndex
      }
      if (childIndex === null || heap[index] <= heap[childIndex]) {
        break
      }
      ;[heap[index], heap[childIndex]] = [heap[childIndex], heap[index]]
      index = childIndex
    }
  }
  const pop = () => {
    if (heap.length <= 1) {
      return heap.pop()
    }
    const [top] = heap
    heap[0] = heap.pop()
    sink()
    return top
  }
  for (let i = 0; i < nums.length; i++) {
    heap.push(nums[i])
    swim()
    if (heap.length > k) {
      pop()
    }
  }
  return heap[0]
}
