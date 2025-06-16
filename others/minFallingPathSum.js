console.log(minFallingPathSum(
  [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]
))

function minFallingPathSum(matrix) {
  const m = matrix[0].length
  const n = matrix.length
  let min = Infinity
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {
      min = Infinity
      for (let k = 0; k < m; k++) {
        if (j !== k) {
          min = Math.min(min, matrix[i][j] + matrix[i - 1][k])
        }
      }
      matrix[i][j] = min
    }
  }
  return Math.min(...matrix[n - 1])
}
