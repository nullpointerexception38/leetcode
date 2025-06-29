function subarraysWithKDistinct(nums, k) {
  const n = nums.length
  const atMost = k => {
    const freq = new Int16Array(nums.length + 1)
    let uniqueCount = 0
    let left = 0
    let count = 0
    for (let i = 0; i < n; i++) {
      const num = nums[i]
      if (++freq[num] === 1) {
        uniqueCount++
      }
      while (uniqueCount > k) {
        const dropped = nums[left++]
        const _count = freq[dropped]
        if (_count === 1) {
          uniqueCount--
        }
        freq[dropped]--
      }
      count += i - left + 1
    }
    return count
  }
  return atMost(k) - atMost(k - 1)
}
