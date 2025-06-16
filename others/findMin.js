console.log(findMin([2,3,4,5,1]))

function findMin(nums) {
  const res = (function find(start, end) {
    const mid = start + Math.floor((end - start) / 2)
    if (nums[mid - 1] > nums[mid]) {
      return nums[mid]
    }
    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1]
    }
    if (start >= mid || mid >= end) {
      return -1
    }
    const left = find(start, mid)
    if (left !== -1) {
      return left
    }
    const right = find(mid, end)
    if (right !== -1) {
      return right
    }
    return -1
  })(0, nums.length - 1)
  return res === -1 ? nums[0] : res
}

