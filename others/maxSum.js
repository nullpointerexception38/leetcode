function maxSum(matrix) {
  let maxSum = 0
  for (let i = 0; i + 2 < matrix.length; i++) {
    for (let j = 0; j + 2 < matrix[i].length; j++) {
      const sum = getSum(matrix, i, j)
      if (sum > maxSum) {
        maxSum = sum
      }
    }
  }
  return maxSum
}

function getSum(matrix, i, j) {
  return matrix[i][j] + matrix[i][j + 1] + matrix[i][j + 2]
                      + matrix[i + 1][j + 1]
       + matrix[i + 2][j] + matrix[i + 2][j + 1] + matrix[i + 2][j + 2]
}

console.log(maxSum([
  [6,2,1,3],[4,2,1,5],[9,2,8,7],[4,1,2,9]
]))
