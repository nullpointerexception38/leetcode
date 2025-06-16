function maxScore(cardPoints, k) {
  const n = cardPoints.length
  let j = k - 1
  let sum = 0
  let maxSum = -Infinity
  for (let i = 0; i < 2 * k; i++) {
    sum += cardPoints[j]
    if (i >= k) {
      sum -= cardPoints[(j + k) % n]
    }
    if (i >= k - 1) {
      maxSum = Math.max(maxSum, sum)
    }
    j--
    j = (j + n) % n
  }
  return maxSum
}
