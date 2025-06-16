function buildArray(nums) {
  return nums.map((_, i) => nums[nums[i]])
}
