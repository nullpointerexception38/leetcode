function smallestRange(lines) {
  const heap = []
  const compare = (a, b) => heap[a][0] < heap[b][0]
  const swap = (a, b) => {
    ;[heap[a], heap[b]] = [heap[b], heap[a]]
  }
  const swim = () => {
    let index = heap.length - 1
    while (index > 0) {
      const parentIndex = index - 1 >> 1
      if (!compare(index, parentIndex)) {
        break
      }
      swap(index, parentIndex)
      index = parentIndex
    }
  }
  const sink = () => {
    const n = heap.length
    let index = 0
    while (index < n) {
      const leftIndex = 2 * index + 1
      const rightIndex = 2 * index + 2
      let childIndex = null
      if (rightIndex < n && compare(rightIndex, leftIndex)) {
        childIndex = rightIndex
      }
      else if (leftIndex < n) {
        childIndex = leftIndex
      }
      if (childIndex === null || compare(index, childIndex)) {
        break
      }
      swap(index, childIndex)
      index = childIndex
    }
  }
  const extractTop = () => {
    if (heap.length <= 1) {
      return heap.pop()
    }
    const top = heap[0]
    heap[0] = heap.pop()
    sink()
    return top
  }
  let right = -Infinity
  for (let i = 0; i < lines.length; i++) {
    const num = lines[i][0]
    heap.push([num, i, 0])
    swim()
    right = Math.max(right, num)
  }
  const n = lines.length
  let min = Infinity
  let answer = []
  while (heap.length === n) {
    const [left, lineIndex, index] = extractTop()
    const distance = right - left
    if (distance < min) {
      min = distance
      answer = [left, right]
    }
    if (index + 1 < lines[lineIndex].length) {
      const num = lines[lineIndex][index + 1]
      heap.push([num, lineIndex, index + 1])
      swim()
      right = Math.max(right, num)
    }
  }
  return answer
}
