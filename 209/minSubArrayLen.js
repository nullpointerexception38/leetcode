console.log(minSubArrayLen(11, [1,2,3,4,5]))

function minSubArrayLen(target, nums) {
  let left = 0
  let sum = 0
  let answer = Infinity
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    while (sum >= target) {
      answer = Math.min(answer, i - left + 1)
      sum -= nums[left++]
    }
  }
  return answer === Infinity ? 0 : answer
}
