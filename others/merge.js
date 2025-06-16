console.log(merge(
  [4,5,6,0,0,0],
  3,
  [1,2,3],
  3
))

function merge(nums1, m, nums2, n) {
  if (m === 0) {
    for (let i = 0; i < nums2.length; i++) {
      nums1[i] = nums2[i]
    }
    return
  }
  let i = m - 1
  let j = n - 1
  let k = m + n - 1
  while (k > 0) {
    if (nums2[j] > nums1[i]) {
      nums1[k] = nums2[j]
      j--
      k--
    }
    else {
      nums1[k] = nums1[i]
      if (i === 0) {
        break
      }
      i--
      k--
    }
  }
  for (let i = 0; i <= j; i++) {
    nums1[i] = nums2[i]
  }
}
