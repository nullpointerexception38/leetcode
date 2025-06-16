console.log(findDifference([1,2,3,3], [1,1,2,2]))

function findDifference(nums1, nums2) {
  const s1 = new Set(nums1)
  const s2 = new Set(nums2)
  const arr1 = new Set()
  const arr2 = new Set()
  for (const num of nums1) {
    if (!s2.has(num)) {
      arr1.add(num)
    }
  }
  for (const num of nums2) {
    if (!s1.has(num)) {
      arr2.add(num)
    }
  }
  return [Array.from(arr1), Array.from(arr2)]
}
