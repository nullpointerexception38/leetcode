console.log(maxScore(
  require('./nums1.js'),
  require('./nums2.js'),
  116
))

function maxScore(nums1, nums2, k) {
  const heap = []
  const swap = (i, j) => {
    ;[heap[i], heap[j]] = [heap[j], heap[i]]
  }
  const swim = () => {
    const getParentIndex = i => Math.floor((i - 1) / 2)
    let index = heap.length - 1
    while (index > 0) {
      const parentIndex = getParentIndex(index)
      if (heap[index] >= heap[parentIndex]) {
        break
      }
      swap(index, parentIndex)
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
      if (rightIndex < length) {
        childIndex = heap[rightIndex] < heap[leftIndex] ? rightIndex : leftIndex
      }
      else if (leftIndex < length) {
        childIndex = leftIndex
      }
      if (childIndex === null || heap[index] <= heap[childIndex]) {
        break
      }
      swap(index, childIndex)
      index = childIndex
    }
  }
  const pairs = nums1.map((num, i) => [nums1[i], nums2[i]]).sort((a, b) => b[1] - a[1])
  let sum = 0
  let maxScore = 0
  for (let i = 0; i < pairs.length; i++) {
    const [num1, num2] = pairs[i]
    sum += num1
    heap.push(num1)
    swim()
    if (i >= k) {
      sum -= heap[0]
      heap[0] = heap.pop()
      sink()
    }
    if (heap.length === k) {
      maxScore = Math.max(maxScore, sum * num2)
    }
  }
  return maxScore
}
