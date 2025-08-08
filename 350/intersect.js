function intersect(nums1, nums2) {
  let arr1 = new Int32Array(nums1).sort()
  let arr2 = new Int32Array(nums2).sort()
  if (arr1.length > arr2.length) {
    ;[arr1, arr2] = [arr2, arr1]
  }
  const res = []
  let last = 0
  for (let i = 0; i < arr1.length; i++) {
    for (let j = last; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        res.push(arr1[i])
        last = j + 1
        break
      }
    }
  }
  return res
}
