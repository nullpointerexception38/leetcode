function removeElement(nums, value) {
  let i = 0
  let j = nums.length - 1
  while (i < j) {
    if (nums[j] === value) {
      j--
    }
    else if (nums[i] !== value) {
      i++
    }
    else {
      ;[nums[i], nums[j]] = [nums[j], nums[i]]
      i++
      j--
    }
  }
  while (nums[i] !== value && i < nums.length) {
    i++
  }
  return i
}
