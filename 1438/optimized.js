function longestSubarray(nums, limit) {
  const maxQueue = []
  const minQueue = []
  let maxStart = 0
  let maxEnd = 0
  let minStart = 0
  let minEnd = 0
  let left = 0
  let maxLength = 0
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    while (maxEnd - maxStart > 0 && num >= nums[maxQueue[maxEnd - 1]]) {
      maxEnd--
    }
    maxQueue[maxEnd++] = i
    while (minEnd - minStart > 0 && num <= nums[minQueue[minEnd - 1]]) {
      minEnd--
    }
    minQueue[minEnd++] = i
    let max = nums[maxQueue[maxStart]]
    let min = nums[minQueue[minStart]]
    while (max - min > limit) {
      left++
      if (maxQueue[maxStart] < left) {
        maxStart++
      }
      if (minQueue[minStart] < left) {
        minStart++
      }
      max = nums[maxQueue[maxStart]]
      min = nums[minQueue[minStart]]
    }
    maxLength = Math.max(maxLength, i - left + 1)
  }
  return maxLength
}
