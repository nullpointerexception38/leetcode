function pivotIndex(nums) {
  const n = nums.length
  const lefts = []
  const rights = []
  let left = 0
  let right = 0
  for (let i = 0; i < n; i++) {
    left += nums[i]
    right += nums[n - i - 1]
    lefts.push(left)
    rights.unshift(right)
  }
  for (let i = 0; i < n; i++) {
    const left = lefts[i - 1] ?? 0
    const right = rights[i + 1] ?? 0
    if (left === right) {
      return i
    }
  }
  return -1
}
