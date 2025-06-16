console.log(search(
  [1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1],
  2
))

function search(nums, target) {
  if (nums.length === 1) {
    return target === nums[0] ? true : false
  }
  const arr = nums.concat(nums)
  return binarySearch(arr, target, 0, arr.length) !== -1
}

function binarySearch(nums, target, start, end) {
  const mid = start + Math.floor((end - start) / 2);
  const value = nums[mid]
  if (value === target) {
    return mid
  }
  if (start > end) {
    return -1
  }
  if (end - start === 1) {
    if (nums[start] === target) {
      return start
    }
    if (nums[end] === target) {
      return end
    }
    return -1
  }
  const index = binarySearch(nums, target, mid, end);
  if (index === -1) {
    return binarySearch(nums, target, start, mid);
  }
  return index
}
