function sortColors(nums) {
  let i = 0
  let j = 0
  let k = nums.length - 1
  while (i <= k) {
    if (nums[i] === 0) {
      ;[nums[i], nums[j]] = [nums[j], nums[i]]
      i++
      j++
    }
    else if (nums[i] === 2) {
      ;[nums[i], nums[k]] = [nums[k], nums[i]]
      k--
    }
    else {
      i++
    }
  }
}
