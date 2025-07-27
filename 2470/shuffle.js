console.log(shuffle([2,5,1,3,4,7], 3))

function shuffle(nums, n) {
  const res = []
  for (let i = 0; i < n; i++) {
    res.push(nums[i], nums[n + i])
  }
  return res
}
