function containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff) {
  const n = nums.length
  const k = Math.min(n, indexDiff + 1)
  const bucket = new Map()
  const getBucketId = num => Math.floor(num / (valueDiff + 1))
  for (let i = 0; i < n; i++) {
    const num = nums[i]
    const bucketId = getBucketId(num)
    if (i >= k) {
      bucket.delete(getBucketId(nums[i - k]))
    }
    if (bucket.has(bucketId)) {
      return true
    }
    if (bucket.has(bucketId - 1) && Math.abs(bucket.get(bucketId - 1) - num) <= valueDiff) {
      return true
    }
    if (bucket.has(bucketId + 1) && Math.abs(bucket.get(bucketId + 1) - num) <= valueDiff) {
      return true
    }
    bucket.set(bucketId, num)
  }
  return false
}
