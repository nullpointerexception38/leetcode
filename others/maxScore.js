console.log(maxScore([53,14,91,35,51,9,80,27,6,15,77,86,34,62,55,45,91,45,23,75,66,42,62,13,34,18,89,67,93,83,100,14,92,73,48,2,47,93,99,100,88,84,48],43))

function maxScore(cardPoints, k) {
  const { length } = cardPoints
  const distance = length - k
  if (distance === 0) {
    return cardPoints.reduce((sum, point) => sum + point, 0)
  }
  const windowWidth = length - distance
  let sum = 0
  for (let i = 0; i < windowWidth; i++) {
    sum += cardPoints[i]
  }
  let maxScore = sum
  for (let i = 0; i < windowWidth; i++) {
    sum -= cardPoints[windowWidth - 1 - i]
    sum += cardPoints[length - 1 - i]
    if (maxScore < sum) {
      maxScore = sum
    }
  }
  return maxScore
}
