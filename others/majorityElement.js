function majorityElement(nums) {
  const n = nums.length
  const countMap = new Map()
  for (const num of nums) {
    const count = countMap.get(num) ?? 0
    countMap.set(num, count + 1)
  }
  const half = Math.floor(n / 2)
  for (const [num, count] of countMap) {
    if (count > half) {
      return num
    }
  }
}
