function moveZeroes(nums) {
  const n = nums.length
  let j = 0
  for (let i = 0; i < n; i++) {
    if (nums[i] !== 0) {
      nums[j++] = nums[i]
    }
  }
  while (j < n) {
    nums[j++] = 0
  }
}
