console.log(countPairs([-1,1,2,3,1], 2))
console.log(countPairs([-6,2,5,-2,-7,-1,3], -2))

function countPairs(nums, target) {
  const n = nums.length
  let count = 0
  for (let i = 0; i < n - 1; i++) {
    for (let j = n - 1; j > i; j--) {
      if (nums[i] + nums[j] < target) {
        count++
      }
    }
  }
  return count
}
