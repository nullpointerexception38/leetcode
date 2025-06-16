function maxSatisfaction(satisfaction) {
  const n = satisfaction.length
  const sorted = satisfaction.slice().sort((a, b) => a - b)
  let maxSum = 0
  let sum = 0
  for (let i = 0; i < n; i++) {
    for (let j = n - 1; j >= n - i - 1; j--) {
      sum += sorted[j]
    }
    if (sum <= maxSum) {
      break
    }
    maxSum = sum
  }
  return maxSum
}

console.log(maxSatisfaction([1, 2, 3, 4]))
console.log(maxSatisfaction([-1, -8, 0, 5, -9]))
console.log(maxSatisfaction([4,3,2]))
console.log(maxSatisfaction([-1,-4,-5]))
