function longestSubarray(nums, limit) {
  const maxQueue = []
  const minQueue = []
  let left = 0
  let maxLength = 0
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    while (maxQueue.length > 0 && num >= nums[maxQueue[maxQueue.length - 1]]) {
      maxQueue.pop()
    }
    maxQueue.push(i)
    while (minQueue.length > 0 && num <= nums[minQueue[minQueue.length - 1]]) {
      minQueue.pop()
    }
    minQueue.push(i)
    let min = nums[minQueue[0]]
    let max = nums[maxQueue[0]]
    while (max - min > limit) {
      left++
      if (maxQueue[0] < left) {
        maxQueue.shift()
      }
      if (minQueue[0] < left) {
        minQueue.shift()
      }
      min = nums[minQueue[0]]
      max = nums[maxQueue[0]]
    }
    maxLength = Math.max(maxLength, i - left + 1)
  }
  return maxLength
}
