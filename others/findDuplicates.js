function findDuplicates(nums) {
  const used = new Map()
  const res = new Set()
  for (const num of nums) {
    if (used[num]) {
      res.add(num)
    }
    used[num] = true
  }
  return Array.from(res)
}
