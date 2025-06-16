function uniqueOccurrences(nums) {
  const map = new Map()
  for (const num of nums) {
    const count = map.get(num) ?? 0
    map.set(num, count + 1)
  }
  const used = new Set()
  for (const [num, count] of map) {
    if (used.has(count)) {
      return false
    }
    used.add(count)
  }
  return true
}
