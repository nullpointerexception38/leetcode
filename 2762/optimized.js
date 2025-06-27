function continuousSubarrays(nums) {
  let min = Infinity
  let max = -Infinity
  let left = 0
  let count = 0
  const n = nums.length
  const getSubArrCount = n => n * (n + 1) / 2
  const setNewLeft = right => {
    count += getSubArrCount(right - left)
    left = right
    min = nums[right]
    max = nums[right]
    while (left > 0 && Math.abs(nums[left - 1] - nums[right]) <= 2) {
      left--
      min = Math.min(min, nums[left])
      max = Math.max(max, nums[left])
    }
    count -= getSubArrCount(right - left)
  }
  let i
  for (i = 0; i < n; i++) {
    const num = nums[i]
    min = Math.min(min, num)
    max = Math.max(max, num)
    if (max - min > 2) {
      setNewLeft(i)
    }
  }
  count += getSubArrCount(i - left)
  return count
}
