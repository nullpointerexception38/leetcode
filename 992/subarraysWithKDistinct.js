function subarraysWithKDistinct(nums, k) {
  const atMost = k => {
    if (k < 0) {
      return 0
    }
    let left = 0
    let count = 0
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i]
      map.set(num, (map.get(num) ?? 0) + 1)
      while (map.size > k) {
        const dropped = nums[left++]
        const _count = map.get(dropped)
        if (_count === 1) {
          map.delete(dropped)
        }
        else {
          map.set(dropped, _count - 1)
        }
      }
      count += i - left + 1
    }
    return count
  }
  return atMost(k) - atMost(k - 1)
}
