console.log(numTriplets(
  [4,1,4,1,12],
  [3,2,5,4]
))

function numTriplets(nums1, nums2) {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)
  return getTripletCount(nums1, nums2) + getTripletCount(nums2, nums1)
}

function getTripletCount(nums1, nums2) {
  const map = {}
  for (const num of nums1) {
    const square = num * num
    map[square] = (map[square] ?? 0) + 1
  }
  const countMap = {}
  for (const num of nums2) {
    countMap[num] = (countMap[num] ?? 0) + 1
  }
  const n = nums1.length
  let count = 0
  for (const key of Object.keys(map)) {
    const square = parseInt(key, 10)
    let left = 0
    let right = nums2.length - 1
    while (left < right) {
      const leftNum = nums2[left]
      const rightNum = nums2[right]
      const product = leftNum * rightNum
      if (product > square) {
        right--
      }
      else if (product < square) {
        left++
      }
      else {
        if (leftNum === rightNum) {
          const n = right - left
          count += ((n * (n + 1)) / 2) * map[square]
          break
        }
        let _left = 1
        let _right = 1
        while (left < right && nums2[left] === nums2[left + 1]) {
          _left++
          left++
        }
        while (left < right && nums2[right] === nums2[right - 1]) {
          _right++
          right--
        }
        count += _left * _right * map[square]
        left++
        right--
      }
    }
  }
  return count
}
