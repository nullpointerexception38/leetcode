const trampoline = x => {
  while (typeof x === 'function') {
    x = x()
  }
  return x
}

const nums = require('./nums.js')

console.time()
console.log(canJump(
  [3,2,1,0,4]
))
console.timeEnd()

function canJump(nums) {
  const n = nums.length
  if (n === 1) {
    return true
  }
  const dp = { [n - 1]: 0 }
  const jump = i => {
    let max = nums[i]
    for (let j = 1; j <= nums[i]; j++) {
      const distance = dp[i + j]
      if (distance > 0 && j + distance > max) {
        max = j + distance
        if (i + max >= n - 1) {
          break
        }
      }
    }
    dp[i] = max
    if (i === 0) {
      return dp[i]
    }
    return () => jump(i - 1)
  }
  const res = trampoline(jump(n - 2)) >= n - 1
  return res
}
