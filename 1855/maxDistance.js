console.log(maxDistance(
  [4,4,3,2,1],
  [4,5,6,1,8]
))

function maxDistance(nums1, nums2) {
  const m = nums1.length
  const n = nums2.length
  let i = 0
  let j = 0
  let answer = -Infinity
  while (i < m && j < n) {
    while (nums1[i] > nums2[j]) {
      i++
    }
    if (i <= j) {
      answer = Math.max(answer, j - i)
    }
    j++
  }
  return answer === -Infinity ? 0 : answer
}
