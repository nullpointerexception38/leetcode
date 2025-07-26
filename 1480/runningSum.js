function runningSum(nums) {
  let sum = 0
  const res = []
  for (const num of nums) {
    res.push(sum += num)
  }
  return res
}
