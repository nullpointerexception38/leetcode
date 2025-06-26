function countSubarrays(nums, k) {
  let left = 0
  let sum = 0
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    while ((sum * (i - left + 1)) >= k) {
      sum -= nums[left++]
    }
    count += i - left + 1
  }
  return count
}
