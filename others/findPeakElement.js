console.log(findPeakElement([3,1,2,1,3]))

function findPeakElement(nums) {
  const queue = [[0, nums.length]]
  while (queue.length > 0) {
    const [start, end] = queue.shift()
    if (start > end) {
      continue
    }
    const mid = start + end >>> 1
    const left = nums[mid - 1] ?? -Infinity
    const right = nums[mid + 1] ?? -Infinity
    const current = nums[mid]
    if (left < current && current > right) {
      return mid
    }
    queue.push([start, mid - 1])
    queue.push([mid + 1, end])
  }
}
