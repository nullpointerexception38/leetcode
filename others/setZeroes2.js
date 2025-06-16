function setZeroes(matrix) {
  const h = matrix.length
  const w = matrix[0].length
  let zeroInRow = false
  let zeroInCol = false
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = '0'
        matrix[i][0] = '0'
        if (i === 0) {
          zeroInRow = true
        }
        if (j === 0) {
          zeroInCol = true
        }
      }
    }
  }
  for (let i = 1; i < h; i++) {
    const zeroRow = matrix[i][0] === '0'
    for (let j = 1; j < w; j++) {
      const zeroCol = matrix[0][j] === '0'
      if (zeroRow || zeroCol) {
        matrix[i][j] = 0
      }
    }
  }
  for (let i = 0; i < h; i++) {
    if (zeroInCol || matrix[i][0] === '0') {
      matrix[i][0] = 0
    }
  }
  for (let j = 0; j < w; j++) {
    if (zeroInRow || matrix[0][j] === '0') {
      matrix[0][j] = 0
    }
  }
}
