//console.log(maximumBeauty([19,48,93,96], 24))
console.log(maximumBeauty([1,1,1,1], 1))

function maximumBeauty(nums, k) {
  nums.sort((a, b) => a - b)
  const twoKs = k + k
  let left = 0
  let sum = 0
  let max = 1
  for (let i = 1; i < nums.length; i++) {
    sum += nums[i] - nums[i - 1]
    while (sum > twoKs) {
      sum -= (nums[left + 1] - nums[left])
      left++
    }
    max = Math.max(max, i - left + 1)
  }
  return max
}
