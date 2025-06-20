function maxSubarrayLength(nums, k) {
  const map = {}
  let i = 0
  let max = 0
  for (let j = 0; j < nums.length; j++) {
    const num = nums[j]
    map[num] = (map[num] ?? 0) + 1
    while (map[num] > k) {
      map[nums[i++]]--
    }
    max = Math.max(max, j - i + 1)
  }
  return max
}
