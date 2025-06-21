console.log(maxFrequency([1,1,1,2,2,3,3], 4))

function maxFrequency(_nums, k) {
  const nums = new Int32Array(_nums).sort()
  let left = 0
  let sum = 0
  let answer = 0
  for (let i = 0; i < nums.length; i++) {
    while ((i - left) * nums[i] - sum > k) {
      sum -= nums[left++]
    }
    sum += nums[i]
    answer = Math.max(answer, i - left + 1)
  }
  return answer
}
