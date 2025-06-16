console.log(tribonacci(25))

function tribonacci(n) {
  const nums = [0, 1, 1]
  if (n <= 2) {
    return nums[n]
  }
  let num = nums[2]
  for (let i = 3; i <= n; i++) {
    num = nums[0] + nums[1] + nums[2]
    nums[0] = nums[1]
    nums[1] = nums[2]
    nums[2] = num
  }
  return num
}
