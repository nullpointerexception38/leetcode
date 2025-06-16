console.log(removeDuplicates([1,1,2,2,3,4]))

function removeDuplicates(nums) {
  const n = nums.length
  let i = 0
  let j = 0
  while (true) {
    while (nums[i] === nums[j]) {
      j++
    }
    if (j >= n) break
    nums[i + 1] = nums[j]
    i++
  }
  return i + 1
}
