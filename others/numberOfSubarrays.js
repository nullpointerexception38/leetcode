console.log(numberOfSubarrays([2,2,2,1,2,2,1,2,2,2], 2))

function numberOfSubarrays(nums, k) {
  const n = nums.length
  const isOdd = num => num % 2 !== 0
  const atMost = k => {
    let i = 0
    let odds = 0
    let count = 0
    for (let j = 0; j < n; j++) {
      if (isOdd(nums[j])) {
        odds++
      }
      while (odds > k) {
        if (isOdd(nums[i])) {
          odds--
        }
        i++
      }
      count += j - i + 1
    }
    return count
  }
  return atMost(k) - atMost(k - 1)
}
