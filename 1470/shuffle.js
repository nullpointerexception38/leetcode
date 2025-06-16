console.log(shuffle([1,2,3,4,4,3,2,1], 4))
function shuffle(nums, n) {
  const answer = []
  for (let i = 0; i < n; i++) {
    answer.push(nums[i])
    answer.push(nums[n + i])
  }
  return answer
}
