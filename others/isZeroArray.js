function isZeroArray(nums, queries) {
  const n = nums.length
  const diffs = Array.from({ length: n + 2 }).fill(0)
  for (const [start, end] of queries) {
    diffs[start + 1]++
    diffs[end + 2]--
  }
  let diff = diffs[0]
  for (let i = 0; i < n; i++) {
    diff -= diffs[i + 1]
    if (nums[i] + diff > 0) {
      return false
    }
  }
  return true
}
