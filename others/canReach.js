console.log(canReach(
  [3,0,2,1,2],
  2
))

function canReach(arr, start) {
  return (function jump(i, used) {
    if (arr[i] === 0) {
      return true
    }
    const distance = arr[i]
    const leftIndex = i - distance
    const rightIndex = i + distance
    if (typeof arr[leftIndex] !== 'undefined' && !used.has(leftIndex)) {
      used.add(leftIndex)
      const hasLeft = jump(leftIndex, used)
      if (hasLeft) {
        return true
      }
    }
    if (typeof arr[rightIndex] !== 'undefined' && !used.has(rightIndex)) {
      used.add(rightIndex)
      const hasRight = jump(rightIndex, used)
      if (hasRight) {
        return true
      }
    }
    return false
  })(start, new Set([start]))
}
