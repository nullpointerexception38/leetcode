logMatrix(
  [
    [0,0,1,0,1,1,1,0,1,1],
    [1,1,1,1,0,1,1,1,1,1],
    [1,1,1,1,1,0,0,0,1,1],
    [1,0,1,0,1,1,1,0,1,1],
    [0,0,1,1,1,0,1,1,1,1],
    [1,0,1,1,1,1,1,1,1,1],
    [1,1,1,1,0,1,0,1,0,1],
    [0,1,0,0,0,1,0,0,1,1],
    [1,1,1,0,1,1,0,1,0,1],
    [1,0,1,1,1,0,1,1,1,0]
  ]
)

console.log('expected')
logMatrix(
  [
    [0,0,1,0,1,2,1,0,1,2],
    [1,1,2,1,0,1,1,1,2,3],
    [2,1,2,1,1,0,0,0,1,2],
    [1,0,1,0,1,1,1,0,1,2],
    [0,0,1,1,1,0,1,1,2,3],
    [1,0,1,2,1,1,1,2,1,2],
    [1,1,1,1,0,1,0,1,0,1],
    [0,1,0,0,0,1,0,0,1,2],
    [1,1,1,0,1,1,0,1,0,1],
    [1,0,1,1,1,0,1,2,1,0]
  ]
)

console.log('actual')
logMatrix(updateMatrix(
  [
    [0,0,1,0,1,2,1,0,1,2],
    [1,1,2,1,0,1,1,1,2,3],
    [2,1,2,1,1,0,0,0,1,2],
    [1,0,1,0,1,1,1,0,1,2],
    [0,0,1,1,1,0,1,1,2,3],
    [1,0,1,2,1,1,1,2,1,2],
    [1,1,1,1,0,1,0,1,0,1],
    [0,1,0,0,0,1,0,0,1,2],
    [1,1,1,0,1,1,0,1,0,1],
    [1,0,1,1,1,0,1,2,1,0]
  ]
))

function updateMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        continue
      }
      const top = matrix[i - 1]?.[j] ?? Infinity
      const left = matrix[i][j - 1] ?? Infinity
      const min = Math.min(top + 1, left + 1)
      matrix[i][j] = min
    }
  }
  for (let i = matrix.length - 1; i >= 0; i--) {
    for (let j = matrix[i].length - 1; j >= 0; j--) {
      if (matrix[i][j] === 0) {
        continue
      }
      const bottom = matrix[i + 1]?.[j] ?? Infinity
      const right = matrix[i][j + 1] ?? Infinity
      const bottomRight = matrix[i + 1]?.[j + 1] ?? Infinity
      const min = Math.min(bottom + 1, right + 1, bottomRight + 2)
      if (min < matrix[i][j]) {
        matrix[i][j] = min
      }
    }
  }
  return matrix
}

function logMatrix(matrix) {
  let str = ''
  for (let i = 0; i < matrix.length; i++) {
    str += matrix[i].join(` `)
    str += `\n`
  }
  console.log(str)
}
