console.log(twoSum([2, 7, 11, 15], 9))

function twoSum(nums, target) {
  const n = nums.length
  let i = 0
  let j = n - 1
  while (i < j) {
    const sum = nums[i] + nums[j]
    if (sum === target) {
      return [i + 1, j + 1]
    }
    if (sum > target) {
      j--
    }
    else {
      i++
    }
  }
}
