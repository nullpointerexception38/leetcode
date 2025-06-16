console.log(missingNumber([9,6,4,2,3,5,7,0,1]))

function missingNumber(nums) {
  const n = nums.length
  const map = new Map()
  for (let i = 0; i <= n; i++) {
    map.set(i, false)
  }
  for (const num of nums) {
    map.set(num, true)
  }
  for (const [num, existed] of map) {
    if (!existed) {
      return num
    }
  }
  return null
}
