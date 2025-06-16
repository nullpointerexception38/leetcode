console.log(generateMatrix(3))

function generateMatrix(n) {
  const matrix = Array.from({ length: n })
    .map(() => Array.from({ length: n }).fill(0))
  const getNextPos = (direction, i, j) => {
    switch (direction) {
      case 0:    // up
        return { i: i - 1, j }
      case 1:    // right
        return { i, j: j + 1 }
      case 2:    // bottom
        return { i: i + 1, j }
      case 3:    // left
        return { i, j: j - 1 }
      default:
        return null
    }
  }
  const isValidPos = pos => {
    const { i, j } = pos
    const hasCell = matrix[i] && typeof matrix[i][j] !== 'undefined'
    if (!hasCell) {
      return false
    }
    return matrix[i][j] === 0
  }
  let index = 1
  let i = 0
  let j = 0
  let direction = 1
  let directionChanged = false
  while (true) {
    matrix[i][j] = index
    const pos = getNextPos(direction, i, j)
    if (isValidPos(pos)) {
      i = pos.i
      j = pos.j
      index++
      directionChanged = false
    } else {
      if (directionChanged) {
        break
      }
      direction++
      direction %= 4
      directionChanged = true
    }
  }
  return matrix
}
