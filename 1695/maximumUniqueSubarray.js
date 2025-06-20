function maximumUniqueSubarray(nums) {
  const n = nums.length
  const sums = Array.from({ length: n }).fill(0)
  const map = new Map()
  let i = 0
  let sum = 0
  let _sum = 0
  let maxSum = 0
  let lastCleared = -1
  for (let j = 0; j < n; j++) {
    const num = nums[j]
    _sum += num
    sum += num
    sums[j] = sum
    if (map.has(num)) {
      const index = map.get(num)
      if (index > lastCleared) {
        _sum -= lastCleared === -1 ? sums[index] : sums[index] - sums[lastCleared]
        lastCleared = index
      }
    }
    maxSum = Math.max(maxSum, _sum)
    map.set(num, j)
  }
  return maxSum
}
