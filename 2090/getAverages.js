function getAverages(nums, k) {
  const n = nums.length
  const count = 2 * k + 1
  const answer = Array.from({ length: n }).fill(-1)
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += nums[i]
    if (i >= count) {
      sum -= nums[i - count]
    }
    if (i >= count - 1) {
      answer[i - k] = Math.floor(sum / count)
    }
  }
  return answer
}
