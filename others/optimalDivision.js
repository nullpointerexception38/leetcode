function optimalDivision(nums) {
  return nums[0] + '/(' + nums.slice(1).join('/') +  ')'
}
