function containsNearbyDuplicate(nums, k) {
  const m = new Map()
  for (let i = 0; i < nums.length; i++) {
    const pos = m.get(nums[i]) ?? -1
    if (pos !== -1 && (i - pos) <= k) {
      return true
    }
    m.set(nums[i], i)
  }
  return false
}

console.log(containsNearbyDuplicate([1,2,3,1], 3))
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))
