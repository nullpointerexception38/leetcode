function maxSum(nums, m, k) {
  let map = new Map()
  let sum = 0
  let maxSum = 0
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    sum += num
    map.set(num, (map.get(num) ?? 0) + 1)
    if (i >= k) {
      const prev = nums[i - k]
      const count = map.get(prev) ?? 0
      if (count === 1) {
        map.delete(prev)
      }
      else {
        map.set(prev, count - 1)
      }
      sum -= prev
    }
    if (i >= k - 1 && map.size >= m) {
      maxSum = Math.max(maxSum, sum)
    }
  }
  return maxSum
}
