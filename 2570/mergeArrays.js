function mergeArrays(nums1, nums2) {
  const m = nums1.length
  const n = nums2.length
  const res = []
  let i = 0
  let j = 0
  while (i < m || j < n) {
    if (i < m && j < n) {
      const [id1, value1] = nums1[i]
      const [id2, value2] = nums2[j]
      if (id1 === id2) {
        res.push([id1, value1 + value2])
        i++
        j++
      }
      else if (id1 < id2) {
        res.push(nums1[i++])
      }
      else {
        res.push(nums2[j++])
      }
    }
    else if (i < m) {
      res.push(nums1[i++])
    }
    else if (j < n) {
      res.push(nums2[j++])
    }
  }
  return res
}
