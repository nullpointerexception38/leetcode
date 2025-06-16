function minZeroArray(nums, queries) {
  const start = nums.findIndex(num => num !== 0)
  if (start === -1) {
    return 0
  }
  const end = nums.findLastIndex(num => num !== 0)
  const n = end - start + 2
  const diffs = Array.from({ length: n }).fill(0)
  for (let i = 0; i < queries.length; i++) {
    const [_left, _right, value] = queries[i]
    if (_right < start || end < _left) {
      continue
    }
    const left = Math.max(start, _left) - start
    const right = Math.min(end, _right) - start
    diffs[left] += value
    diffs[right + 1] -= value
    let diff = 0
    let pass = true
    for (let j = 0; j < n; j++) {
      diff -= diffs[j]
      if (nums[start + j] + diff > 0) {
        pass = false
        break
      }
    }
    if (pass) {
      return i + 1
    }
  }
  return -1
}

console.log(minZeroArray(
  [1,1],
  [[0,0,1],[1,1,5],[0,1,5]]
))
