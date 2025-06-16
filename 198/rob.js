function rob(nums) {
  let prev = 0
  let current = 0
  for (const num of nums) {
    [prev, current] = [current, Math.max(current, prev + num)]
  }
  return current
}
