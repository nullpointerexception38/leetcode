function sortColors(nums) {
  const swapIndex = partition(nums, 0, nums.length, 1)
  partition(nums, swapIndex, nums.length, 2)
  return nums
}

function partition(nums, start, end, pivot) {
  let swapIndex = 0
  for (let i = 0; i < nums.length; i++) {
    const target = nums[i]
    if (target < pivot) {
      [nums[swapIndex], nums[i]] = [nums[i], nums[swapIndex]]
      swapIndex++
    }
  }
  return swapIndex
}

console.log(sortColors(
  [1, 0, 1, 1, 2, 0, 2, 1, 1, 0]
))
