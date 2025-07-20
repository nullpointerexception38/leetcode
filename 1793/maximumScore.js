console.log(maximumScore(
  [6569,9667,3148,7698,1622,2194,793,9041,1670,1872], 5
))

function maximumScore(nums, k) {
  const n = nums.length
  let score = nums[k]
  let min = score
  let i = k
  let j = k
  while (true) {
    let nextNum
    if (i > 0 && j === n - 1) {
      nextNum = nums[--i]
    }
    else if (i === 0 && j < n - 1) {
      nextNum = nums[++j]
    }
    else if (i > 0 && j < n - 1) {
      if (nums[i - 1] > nums[j + 1]) {
        nextNum = nums[--i]
      }
      else {
        nextNum = nums[++j]
      }
    }
    else {
      break
    }
    min = Math.min(min, nextNum)
    score = Math.max(score, min * (j - i + 1))
  }
  return score
}
