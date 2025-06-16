function findTheWinner(n, k) {
  const nums = Array.from({ length: n }).map((_, i) => i + 1)
  let pos = k - 1
  while (nums.length !== 1) {
    nums.splice(pos, 1)
    pos = (pos + k - 1) % nums.length
  }
  return nums[0]
}
