function maximumDifference(nums) {
  let min = Infinity
  let maxDiff = -Infinity
  for (const num of nums) {
    min = Math.min(min, num)
    const diff = num - min
    if (diff > 0 && diff > maxDiff) {
      maxDiff = diff
    }
  }
  return maxDiff === -Infinity ? -1 : maxDiff
}
