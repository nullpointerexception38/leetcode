function countSquares(matrix) {
  const res = getMatrixData(matrix)
  const { startI, endI, startJ, endJ } = res
  const width = endJ - startJ + 1
  const height = endI - startI + 1
  const max = Math.min(width, height)
  let count = res.count
  for (let k = 2; k <= max; k++) {
    for (let i = startI; i + k <= endI + 1; i++) {
      for (let j = startJ; j + k <= endJ + 1; j++) {
        if (isOneSquare(matrix, i, j, k)) {
          count++
        }
      }
    }
  }
  return count
}

function isOneSquare(matrix, startI, startJ, length) {
  const height = Math.min(matrix.length, startI + length)
  const width = Math.min(matrix[0].length, startJ + length)
  for (let i = startI; i < height; i++) {
    for (let j = startJ; j < width; j++) {
      if (matrix[i][j] === 0) {
        return false
      }
    }
  }
  return true
}

function getMatrixData(matrix) {
  const width = matrix[0].length
  const height = matrix.length
  let minI = matrix.length
  let maxI = 0
  let minJ = matrix[0].length
  let maxJ = 0
  let count = 0
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (matrix[i][j] !== 1) {
        continue
      }
      if (i < minI) {
        minI = i
      }
      if (i > maxI) {
        maxI = i
      }
      if (j < minJ) {
        minJ = j
      }
      if (j > maxJ) {
        maxJ = j
      }
      count++
    }
  }
  return { startI: minI, endI: maxI, startJ: minJ, endJ: maxJ, count }
}

console.log(countSquares(
  [
      [1,0,1],
      [1,1,0],
      [1,1,0]
  ]
))
