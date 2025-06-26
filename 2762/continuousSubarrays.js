function continuousSubarrays(nums) {
  const map = new Map()
  const canAdd = value => {
    for (const [num, count] of map) {
      if (Math.abs(num - value) > 2 && count > 0) {
        return false
      }
    }
    return true
  }
  let left = 0
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    while (!canAdd(num)) {
      const dropped = nums[left++]
      map.set(dropped, map.get(dropped) - 1)
    }
    map.set(num, (map.get(num) ?? 0) + 1)
    count += i - left + 1
  }
  return count
}
