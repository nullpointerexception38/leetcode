function permuteUnique(nums) {
  const { length } = nums
  if (length === 0) {
    return []
  }
  if (length === 1) {
    return [nums]
  }
  const used = new Map()
  const res = []
  for (let i = 0; i < length; i++) {
    const target = nums[i]
    const rest = [...nums.slice(0, i), ...nums.slice(i + 1)]
    const permutations = permuteUnique(rest)
    for (const p of permutations) {
      const arr = [target, ...p]
      const key = arr.toString()
      if (used.has(key)) {
        continue
      }
      used.set(key, true)
      res.push(arr)
    }
  }
  return res
}

console.log(permuteUnique(
  [1, 1, 2]
))
