console.log(buildArray(
  [0,2,1,5,3,4]
))

console.log(buildArray(
  [5,0,1,2,3,4]
))

function buildArray(nums) {
  const n = nums.length
  for (let i = 0; i < n; i++) {
    const a = nums[i] % n
    const b = nums[nums[i]] % n
    nums[i] = a + (b * n)
  }
  for (let i = 0; i < n; i++) {
    const c = nums[i]
    nums[i] = (c - (c % n)) / n
  }
  return nums
}
