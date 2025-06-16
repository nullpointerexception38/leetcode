function maximalSquare(matrix) {
  const height = matrix.length
  const width = matrix[0].length
  const dp = Array.from({ length: height })
    .map(() => Array.from({ length: width }).fill(0))
  const get = (i, j) => {
    if (i < 0 || j < 0) {
      return 0
    }
    return dp[i][j]
  }
  let res = 0
  const set = (i, j, value) => {
    dp[i][j] = value
    if (value > res) {
      res = value
    }
  }
  const getLength = (row, col) => {
    const top = get(row - 1, col)
    const topLeft = get(row - 1, col - 1)
    const left = get(row, col - 1)
    return Math.min(top, topLeft, left) + 1
  }
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (matrix[i][j] === '1') {
        const length = getLength(i, j)
        set(i, j, length)
      }
    }
  }
  return res * res
}

console.log(maximalSquare(
  [
    ["0","0","0","1"],
    ["1","1","0","1"],
    ["1","1","1","1"],
    ["0","1","1","1"],
    ["0","1","1","1"]
  ]
))
