console.log(triangleNumber([4,2,3,4]))

function triangleNumber(nums) {
  const n = nums.length
  nums.sort((a, b) => a - b)
  let count = 0
  for (let i = n - 1; i >= 2; i--) {
    let left = 0
    let right = i - 1
    while (left < right) {
      if (nums[left] + nums[right] > nums[i]) {
        count += right - left
        right--
      }
      else {
        left++
      }
    }
  }
  return count
}
