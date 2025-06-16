console.log(canJump(
  [3, 2, 1, 0, 4]
))

function canJump(nums) {
  const dp = new Map()
  const { length } = nums
  lastDest = -1
  for (let i = 0; i < length; i++) {
    const distance = nums[i]
    for (let j = 1; j <= i + distance; j++) {
      if (i + j >= length) {
        break
      }
      const dest = i + k
      dp.set(dest, i)
      lastDest = dest
    }
  }
}
