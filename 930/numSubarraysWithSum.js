function numSubarraysWithSum(nums, goal) {
  const lt = k => {
    if (k < 0) {
      return 0
    }
    let left = 0
    let sum = 0
    let count = 0
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i]
      while (sum > k) {
        sum -= nums[left++]
      }
      count += i - left + 1
    }
    return count
  }
  return lt(goal) - lt(goal - 1)
}
