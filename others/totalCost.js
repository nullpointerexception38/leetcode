console.log(totalCost(
  [18,64,12,21,21,78,36,58,88,58,99,26,92,91,53,10,24,25,20,92,73,63,51,65,87,6,17,32,14,42,46,65,43,9,75],
  13,
  23
))

function totalCost(costs, k, candidates) {
  const swap = (heap, i, j) => {
    ;[heap[i], heap[j]] = [heap[j], heap[i]]
  }
  const swim = heap => {
    let index = heap.length - 1
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2)
      if (heap[index] >= heap[parentIndex]) {
        break
      }
      swap(heap, index, parentIndex)
      index = parentIndex
    }
  }
  const sink = heap => {
    let index = 0
    const { length } = heap
    while (index < length) {
      const leftIndex = 2 * index + 1
      const rightIndex = 2 * index + 2
      let childIndex = null
      if (rightIndex < length && heap[rightIndex] <= heap[leftIndex]) {
        childIndex = rightIndex
      }
      else if (leftIndex < length) {
        childIndex = leftIndex
      }
      if (childIndex === null || heap[index] < heap[childIndex]) {
        break
      }
      swap(heap, index, childIndex)
      index = childIndex
    }
  }
  const extractTop = heap => {
    if (heap.length <= 1) {
      return heap.pop()
    }
    const [top] = heap
    heap[0] = heap.pop()
    sink(heap)
    return top
  }
  const leftHeap = []
  const rightHeap = []
  const n = costs.length
  let answer = 0
  let start = 0
  let end = costs.length - 1
  for (let i = 0; i < candidates && start <= end; i++) {
    leftHeap.push(costs[start++])
    swim(leftHeap)
    if (start <= end) {
      rightHeap.push(costs[end--])
      swim(rightHeap)
    }
  }
  for (let i = 0; i < k; i++) {
    let heap = leftHeap
    if (leftHeap.length > 0 && rightHeap.length > 0) {
      heap = leftHeap[0] <= rightHeap[0] ? leftHeap : rightHeap
    }
    else if (rightHeap.length > 0) {
      heap = rightHeap
    }
    answer += extractTop(heap)
    if (start <= end) {
      if (leftHeap.length < candidates) {
        leftHeap.push(costs[start++])
        swim(leftHeap)
      }
      else if (rightHeap.length < candidates) {
        rightHeap.push(costs[end--])
        swim(rightHeap)
      }
    }
  }
  return answer
}
