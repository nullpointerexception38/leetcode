function summaryRanges(nums) {
  const n = nums.length
  if (n === 0) {
    return []
  }
  const res = []
  const posToStr = pos => {
    if (pos.length === 1) {
      return String(nums[pos[0]])
    }
    return `${nums[pos[0]]}->${nums[pos[pos.length - 1]]}`
  }
  let pos = [0]
  for (let i = 1; i < n; i++) {
    if (nums[i] - nums[i - 1] !== 1) {
      res.push(posToStr(pos))
      pos = [i]
    }
    else {
      pos.push(i)
    }
  }
  if (pos.length > 0) {
    res.push(posToStr(pos))
  }
  return res
}

console.log(summaryRanges([0,1,2,4,5,7]))
console.log(summaryRanges([0,2,3,4,6,8,9]))
console.log(summaryRanges([]))
