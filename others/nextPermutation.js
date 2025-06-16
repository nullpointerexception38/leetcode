function nextPermutation(nums) {
  const { length } = nums
  for (let i = length - 2; i >= 0; i--) {
    const prev = nums[i]
    const current = nums[i + 1]
    if (prev < current) {
      let candidate = Infinity
      let candidateIndex = -1
      for (let j = i + 1; j < length; j++) {
        const target = nums[j]
        if (prev < target && target < candidate) {
          candidate = target
          candidateIndex = j
        }
      }
      if (candidateIndex !== -1) {
        [nums[i], nums[candidateIndex]] = [nums[candidateIndex], nums[i]]
        sort(nums, i + 1)
        return nums
      }
    }
  }
  sort(nums, 0)
  return nums
}

function sort(nums, start) {
  const { length } = nums
  for (let i = start; i < length; i++) {
    for (let j = start + 1; j < length - (i - start); j++) {
      const prev = nums[j - 1]
      const current = nums[j]
      if (prev > current) {
        ;[nums[j - 1], nums[j]] = [nums[j], nums[j - 1]]
      }
    }
  }
}

console.log(nextPermutation([1, 2, 3]))
