function minPairSum(arr) {
  const nums = arr.slice().sort((a, b) => a - b)
  const size = nums.length
  const end = size / 2
  let max = 0
  for (i = 0; i < end; i++) {
    const sum = nums[i] + nums[size - i - 1]
    if (sum > max) {
      max = sum
    }
  }
  return max
}

console.log(minPairSum([3, 5, 4, 2, 4, 6]))
