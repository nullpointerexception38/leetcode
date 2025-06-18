console.log(minimumDifference([87063,61094,44530,21297,95857,93551,9918], 6))

function minimumDifference(nums, k) {
  nums = new Int32Array(nums).sort()
  let minDiff = Infinity
  for (let i = 0; i < nums.length; i++) {
    if (i >= k - 1) {
      minDiff = Math.min(minDiff, nums[i] - nums[i - k + 1])
    }
  }
  return minDiff === Infinity ? 0 : minDiff
}
