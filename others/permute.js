function permute(nums) {
  const size = nums.length
  const [first] = nums
  if (size === 1) {
    return [[first]]
  }
  const res = []
  const remains = permute(nums.slice(1))
  for (let i = 0; i < size; i++) {
    for (const remain of remains) {
      const front = remain.slice(0, i)
      const rear = remain.slice(i)
      res.push([...front, first, ...rear])
    }
  }
  return res
}
