function partitionArray(nums, k) {
  const sortedNums = nums.slice().sort((a, b) => a - b)
  let [min] = sortedNums
  let count = 1
  for (const num of sortedNums) {
    if (num - min > k) {
      count++
      min = num
    }
  }
  return count
}
