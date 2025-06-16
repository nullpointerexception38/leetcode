console.log(spiralOrder([
  [1,2,3],
  [4,5,6],
  [7,8,9]
]))

function spiralOrder(matrix) {
  const size = matrix.length * matrix[0].length
  const arr = []
  let i = 0
  let j = 0
  let direction = 'RIGHT'

  const getNextPos = (i, j) => {
    switch (direction) {
      case 'UP':
        return [i - 1, j]
      case 'RIGHT':
        return [i, j + 1]
      case 'DOWN':
        return [i + 1, j]
      case 'LEFT':
        return [i, j - 1]
      default:
        throw new Error(`Unexpected pos in getNextPos:`, i, j)
    }
  }
  const isValidPos = ([i, j ]) => {
    if (used.has(`${i}:${j}`)) {
      return false
    }
    return 0 <= i && i < matrix.length && 0 <= j && j < matrix[0].length
  }
  const used = new Map()
  const directions = ['UP', 'RIGHT', 'DOWN', 'LEFT']

  const getNextDirection = () => {
    const nextIndex = (directions.indexOf(direction) + 1) % 4
    return directions[nextIndex]
  }

  while (arr.length < size) {
    used.set(`${i}:${j}`, true)
    arr.push(matrix[i][j])
    const pos = getNextPos(i, j)
    if (isValidPos(pos)) {
      i = pos[0]
      j = pos[1]
    } else {
      direction = getNextDirection()
      const pos = getNextPos(i, j)
      if (!isValidPos(pos)) {
        break
      }
      i = pos[0]
      j = pos[1]
    }
  }
  return arr
}
