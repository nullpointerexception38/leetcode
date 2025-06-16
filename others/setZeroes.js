function setZeroes(matrix) {
  const rowMap = new Map()
  const colMap = new Map()
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rowMap.set(i, true)
        colMap.set(j, true)
      }
    }
  }
  for (const [row] of rowMap) {
    matrix[row].forEach((_, j) => matrix[row][j] = 0)
  }
  for (const [col] of colMap) {
    matrix.forEach((_, i) => matrix[i][col] = 0)
  }
  return matrix
}

console.log(setZeroes(
  [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ]
))
