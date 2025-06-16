function merge(nums1, m, nums2, n) {
  let i = m - 1
  let j = n - 1
  let k = m + n - 1
  while (k >= 0) {
    const first = nums1[i]
    const second = nums2[j]
    if (i < 0 || first < second) {
      nums1[k] = second
      j--
    }
    else {
      nums1[k] = first
      i--
    }
    k--
  }
}
