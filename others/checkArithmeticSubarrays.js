function checkArithmeticSubarrays(nums, l, r) {
  return l.map((startIndex, index) => {
    const endIndex = r[index]
    const arr = nums.slice(startIndex, endIndex + 1).sort((a, b) => a - b)
    let diff = null
    for (let i = 1; i < arr.length; i++) {
      const prev = arr[i - 1]
      const current = arr[i]
      const currentDiff = prev - current
      if (diff !== null && currentDiff !== diff) {
        return false
      }
      diff = currentDiff
    }
    return true
  })
}

console.log(checkArithmeticSubarrays(
  [4,6,5,9,3,7],
  [0,0,2],
  [2,3,5]
))
