function jump(nums) {
  const n = nums.length
  const dp = new Map()
  return (function jump(i) {
    if (dp.has(i)) {
      return dp.get(i)
    }
    if (i >= n - 1) {
      return 0
    }
    const distance = nums[i]
    if (i + distance >= n - 1) {
      dp.set(i, 1)
      return 1
    }
    let minTimes = -1
    for (let j = 1; j <= distance && (i + j) < n - 1; j++) {
      const times = jump(i + j)
      if (times === -1) {
        continue
      }
      if (minTimes === -1 || 1 + times < minTimes) {
        minTimes = 1 + times
      }
    }
    dp.set(i, minTimes)
    return minTimes
  })(0)
}

console.log(jump(
  [5,6,4,4,6,9,4,4,7,4,4,8,2,6,8,1,5,9,6,5,2,7,9,7,9,6,9,4,1,6,8,8,4,4]
))
