function matrixBlockSum(matrix, k) {
  const res = []
  for (let i = 0; i < matrix.length; i++) {
    const row = []
    for (let j = 0; j < matrix[i].length; j++) {
      const sum = getBlockSum(matrix, i, j, k)
      row.push(sum)
    }
    res.push(row)
  }
  return res
}

console.log(matrixBlockSum([
  [1,2,3],
  [4,5,6],
  [7,8,9]
], 2))

function getBlockPosArr(matrix, baseI, baseJ, k) {
  const arr = []
  const startI = Math.max(0, baseI - k)
  const endI = Math.min(matrix.length, baseI + k + 1)
  for (let i = startI; i < endI; i++) {
    const startJ = Math.max(0, baseJ - k)
    const endJ = Math.min(matrix[i].length, baseJ + k + 1)
    for (let j = startJ; j < endJ; j++) {
      arr.push({ i, j })
    }
  }
  return arr
}

function getBlockSum(matrix, i, j, k) {
  return getBlockPosArr(matrix, i, j, k)
  .reduce((sum, pos) => {
    const value = matrix[pos.i][pos.j]
    if (Number.isInteger(value)) {
      return sum + value
    }
    return sum
  }, 0)
}
