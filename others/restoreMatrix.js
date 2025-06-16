function restoreMatrix(rowSum, colSum) {
  const rows = rowSum.length
  const cols = colSum.length
  const size = rows * cols
  const [rowsMin, rowsMinIndex] = getMinWithIndex(rowSum)
  const [colsMin, colsMinIndex] = getMinWithIndex(colSum)
  const matrix = createEmptyMatrix(rows, cols)
  console.log('rowsMin vs colsMin', rowsMin, colsMin)
  let isRowTurn = rowsMin <= colsMin
  let rowIndex = 0
  let colIndex = 0
  let isStarted = true
  while (rowIndex < rows && colIndex < cols) {
    console.log(`isRowTurn ${isRowTurn} ${rowIndex}:${colIndex}`);
    log(matrix)
    if (isRowTurn) {
      const j = isStarted ? colIndex : colIndex - 1
      matrix[rowIndex][colIndex] = rowSum[rowIndex] - matrix[rowIndex][j]
      rowIndex++
    } else {
      const i = isStarted ? rowIndex : rowIndex - 1
      matrix[rowIndex][colIndex] = colSum[colIndex] - matrix[i][colIndex]
      colIndex++
    }
    isStarted = false
    isRowTurn = !isRowTurn
  }
  return matrix;
}

function createEmptyMatrix(rows, cols) {
  return new Array(rows).fill(null)
    .map((_, i) => new Array(cols).fill(0))
}

function getMinWithIndex(arr) {
  let minIndex = -1
  let min = Infinity
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i]
    if (num < min) {
      min = num
      minIndex = i
    }
  }
  return [min, minIndex]
}

function log(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i])
  }
  console.log('')
}

log(restoreMatrix([4, 12, 10, 1, 0], [1, 0, 3, 16, 7]))
