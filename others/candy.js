console.log(candy([1,3,4,5,2]))

function candy(ratings) {
  const n = ratings.length
  const nums = Array.from({ length: n }).fill(1)
  for (let i = 1; i < n; i++) {
    if (ratings[i - 1] < ratings[i]) {
      nums[i] = nums[i - 1] + 1
    }
  }
  let sum = nums[n - 1]
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1] && nums[i] <= nums[i + 1]) {
      nums[i] = nums[i + 1] + 1
    }
    sum += nums[i]
  }
  return sum
}
