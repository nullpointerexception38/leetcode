function longestNiceSubarray(nums) {
  const n = nums.length
  if (n === 1) {
    return 1
  }
  let mask = nums[0]
  let left = 0
  let count = 0
  for (let i = 1; i < n; i++) {
    const num = nums[i]
    while ((mask & num) !== 0 && left < i) {
      mask ^= nums[left++]
    }
    mask += num
    count = Math.max(count, i - left + 1)
  }
  return count
}
