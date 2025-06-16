function searchRange(nums, target) {
  const { length } = nums
  const index = binarySearch(nums, target, 0, length)
  if (index === -1) {
    return [-1, -1]
  }
  let leftIndex = index
  let rightIndex = index
  let leftReached = false
  let rightReached = false
  while (true) {
    if (leftReached && rightReached) {
      break
    }
    if (!leftReached) {
      const nextLeftIndex = binarySearch(nums, target, 0, leftIndex - 1)
      if (nextLeftIndex === -1) {
        leftReached = true
      } else {
        if (leftIndex === 0) {
          leftReached = true
        }
        leftIndex = nextLeftIndex
      }
    }
    if (!rightReached) {
      const nextRightIndex = binarySearch(nums, target, rightIndex + 1, length, 'right')
      if (nextRightIndex === -1) {
        rightReached = true
      } else {
        rightIndex = nextRightIndex
      }
    }
  }
  return [leftIndex, rightIndex]
}

function binarySearch(nums, target, start, end, direction = 'left') {
  const mid = start + Math.ceil((end - start) / 2)
  if (nums[mid] === target) {
    return mid
  }
  const diff = end - start
  if (diff === 1 && nums[start] === target) {
    return start
  }
  if (diff === 1 && nums[start + 1] === target) {
    return start + 1
  }
  if (diff <= 1) {
    return -1
  }
  if (direction === 'left') {
    const leftIndex = binarySearch(nums, target, start, mid)
    if (leftIndex !== -1) {
      return leftIndex
    }
    return binarySearch(nums, target, mid, end, direction)
  }
  const rightIndex = binarySearch(nums, target, mid, end, direction)
  if (rightIndex !== -1) {
    return rightIndex
  }
  return binarySearch(nums, target, start, mid)
}
