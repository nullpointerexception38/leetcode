console.log(threeSum([-2,0,1,1,2]))

function threeSum(nums) {
  nums.sort((a, b) => a - b)
  const n = nums.length
  const arr = []
  for (let k = 0; k < n - 2; k++) {
    if (nums[k] === nums[k - 1]) {
      continue
    }
    let i = k + 1
    let j = n - 1
    while (i < j) {
      const sum = nums[i] + nums[j] + nums[k]
      if (sum === 0) {
        arr.push([nums[i], nums[j], nums[k]])
        while (i < j && nums[i] === nums[i + 1]) {
          i++
        }
        while (i < j && nums[j] === nums[j - 1]) {
          j--
        }
        i++
        j--
      }
      else if (sum < 0) {
        i++
      }
      else {
        j--
      }
    }
  }
  return arr
}
