function getCommon(nums1, nums2) {
  let i = 0
  let j = 0
  let min = Infinity
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      i++
    }
    else if (nums1[i] > nums2[j]) {
      j++
    }
    else {
      min = Math.min(min, nums1[i])
      i++
      j++
    }
  }
  return min === Infinity ? -1 : min
}
