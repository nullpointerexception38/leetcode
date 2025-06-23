console.log(minSizeSubarray([1,2], 72))
console.log(minSizeSubarray([1,6,5,5,1,1,2,5,3,1,5,3,2,4,6,6], 56))

function minSizeSubarray(nums, target) {
  const total = nums.reduce((sum, num) => sum + num, 0)
  const quotient = Math.floor(target / total)
  const k = target % total
  const n = nums.length
  if (k === 0) {
    return n * quotient
  }
  const getIndex = i => (i + n) % n
  let sum = 0
  let left = 0
  let answer = Infinity
  for (let i = 0; i < 2 * n; i++) {
    sum += nums[getIndex(i)]
    while (sum > k) {
      sum -= nums[getIndex(left++)]
    }
    if (sum === k) {
      const right = i < 0 ? i + n : i
      answer = Math.min(answer, right - left + 1)
    }
  }
  if (answer === Infinity) {
    return -1
  }
  return quotient * n + answer
}
