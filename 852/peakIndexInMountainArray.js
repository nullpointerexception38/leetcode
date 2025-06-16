console.log(peakIndexInMountainArray(
  [40,48,61,75,100,99,98,39,30,10]
))

function peakIndexInMountainArray(nums) {
  const n = nums.length
  return (function binarySearch(left, right) {
    if (left > right) {
      return -1
    }
    const mid = left + right >> 1
    const midNum = nums[mid]
    if (0 <= (mid - 1) && (mid + 1) < n && nums[mid - 1] < midNum && midNum > nums[mid + 1]) {
      return mid
    }
    const leftRes = binarySearch(left, mid - 1)
    if (leftRes !== -1) {
      return leftRes
    }
    const rightRes = binarySearch(mid + 1, right)
    if (rightRes !== -1) {
      return rightRes
    }
    return -1
  })(0, n - 1)
}
