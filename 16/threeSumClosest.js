console.log(threeSumClosest(
  [0,0,0], 1
))

function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b)
  const n = nums.length
  let min = Infinity
  let closest = Infinity
  for (let i = 0; i < n - 2; i++) {
    let j = i + 1
    let k = n - 1
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k]
      if (sum > target) {
        k--
      }
      else if (sum < target) {
        j++
      }
      else {
        return sum
      }
      const distance = Math.abs(sum - target)
      if (distance < min) {
        min = distance
        closest = sum
      }
    }
  }
  return closest
}
