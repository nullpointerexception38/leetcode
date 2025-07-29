function transformArray(nums) {
  let odds = 0
  let evens = 0
  for (const num of nums) {
    if (num % 2 === 0) {
      evens++
    }
    else {
      odds++
    }
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = i < evens ? 0 : 1
  }
  return nums
}
