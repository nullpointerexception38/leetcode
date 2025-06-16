console.log(maxOperations([3,5,1,5], 2))

function maxOperations(nums, k) {
  const sorted = nums.slice().sort((a, b) => a - b)
  let count = 0
  let i = 0
  let j = nums.length - 1
  while (i < j) {
    if (sorted[i] + sorted[j] > k) {
      j--
    }
    else if (sorted[i] + sorted[j] < k) {
      i++
    }
    else if (sorted[i] + sorted[j] === k) {
      count++
      j--
      i++
    }
  }
  return count
}
