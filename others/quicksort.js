function quicksort(nums) {
  partition(nums, 0, nums.length)
  return nums
}

function partition(nums, start, end) {
  const length = end - start
  if (length <= 1) {
    return
  }
  let swapIndex = start
  let pivot = nums[end - 1]
  for (let i = start; i < end; i++) {
    const target = nums[i]
    if (target <= pivot) {
      ;[nums[swapIndex], nums[i]] = [nums[i], nums[swapIndex]]
      swapIndex += 1
    }
  }
  partition(nums, start, swapIndex - 1)
  partition(nums, swapIndex, end)
}
