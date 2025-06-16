/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
function diagonalSort(matrix) {
  const rows = matrix.length
  const cols = matrix[0].length
  const maxCount = rows + cols - 1
  let count = 0
  let i = rows - 1
  let j = 0
  while (count < maxCount) {
    const points = getSortedDiagnalArr(i, j, matrix)
    points.forEach(point => {
      matrix[point.i][point.j] = point.value
    })
    if (i > 0) {
      i--
    }
    else if (i === 0) {
      j++
    }
    count++
  }
  return matrix
}

function getSortedDiagnalArr(rawI, rawJ, matrix) {
  const rows = matrix.length
  const cols = matrix[0].length
  const points = []
  const values = []
  let i = rawI
  let j = rawJ
  while (i < rows && j < cols) {
    points.push({ i, j })
    values.push(matrix[i][j])
    i++
    j++
  }
  values.sort((a, b) => a - b)
    .forEach((value, i) => {
      points[i].value = value
    })
  return points
}

console.log(diagonalSort([
  [3,3,1,1],
  [2,2,1,2],
  [1,1,1,2]
]))
