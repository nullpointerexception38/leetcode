function maximumJumps(nums, distance) {
  const n = nums.length
  const dp = memoize(i => {
    if (i === n - 1) {
      return 0
    }
    let res = -1
    for (let j = i + 1; j < n; j++) {
      if (Math.abs(nums[j] - nums[i]) <= distance && dp(j) !== -1) {
        res = Math.max(res, 1 + dp(j))
      }
    }
    return res
  })
  return dp(0)
}

function memoize(fn) {
  const map = new Map()
  return i => {
    if (map.has(i)) {
      return map.get(i)
    }
    const res = fn(i)
    map.set(i, res)
    return res
  }
}