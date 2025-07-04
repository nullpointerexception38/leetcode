function sortedSquares(nums) {
  const n = nums.length
  const res = new Int32Array(n)
  let i = 0
  let j = n - 1
  let k = n - 1
  while (i <= j) {
    const s1 = nums[i] * nums[i]
    const s2 = nums[j] * nums[j]
    if (s2 > s1) {
      res[k--] = s2
      j--
    }
    else {
      res[k--] = s1
      i++
    }
  }
  return res
}
