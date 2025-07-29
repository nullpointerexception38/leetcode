console.log(applyOperations([1,2,2,1,1,0]))

function applyOperations(nums) {
  const n = nums.length
  for (let i = 1; i < n; i++) {
    if (nums[i - 1] === nums[i]) {
      nums[i - 1] *= 2
      nums[i] = 0
    }
  }
  let zeroPos = Infinity
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0 && zeroPos === Infinity) {
      zeroPos = i
    }
    else if (nums[i] > 0 && i > zeroPos) {
      ;[nums[zeroPos], nums[i]] = [nums[i], nums[zeroPos]]
      while (zeroPos < n && nums[zeroPos] !== 0) {
        zeroPos++
      }
    }
  }
  return nums
}
