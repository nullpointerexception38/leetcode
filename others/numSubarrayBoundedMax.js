function numSubarrayBoundedMax(nums, left, right) {
  return upperbounded(nums, right) - upperbounded(nums, left - 1)
}

function upperbounded(nums, k) {
  let x = 0
  let c = 0
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (num <= k) {
      c += 1
      x += c
    }
    else {
      c = 0
    }
  }
  return x
}
