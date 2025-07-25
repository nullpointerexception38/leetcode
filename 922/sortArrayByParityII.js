function sortArrayByParityII(nums) {
  const n = nums.length
  const needOdd = i => (nums[i] % 2) === 0 && (i % 2) !== 0
  const needEven = i => (nums[i] % 2) !== 0 && (i % 2) === 0
  const swap = (i, j) => {
    ;[nums[i], nums[j]] = [nums[j], nums[i]]
  }
  for (let i = 0; i < n; i++) {
    if (needOdd(i)) {
      for (let j = i + 1; j < n; j++) {
        if (needEven(j)) {
          swap(i, j)
          break
        }
      }
    }
    else if (needEven(i)) {
      for (let j = i + 1; j < n; j++) {
        if (needOdd(j)) {
          swap(i, j)
          break
        }
      }
    }
  }
  return nums
}
