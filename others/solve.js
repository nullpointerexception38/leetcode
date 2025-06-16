function solve(board) {
  const getCellValue = (i, j) => {
    const row = board[i]
    return row ? row[j] ?? '' : ''
  }
  const getSurroundedCells = (row, col) => {
    return [
      [row - 1, col],
      [row + 1, col],
      [row, col - 1],
      [row, col + 1]
    ].map(([i, j]) => ({
      row: i,
      col: j,
      value: getCellValue(i, j)
    }))
  }
  const isBorderlineCell = (row, col) => {
    return board[row][col] === 'O' && getSurroundedCells(row, col).some(cell => cell.value === '')
  }
  const borderlineCellMap = new Map()
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[i][j]
      if (isBorderlineCell(i, j)) {
        borderlineCellMap.set(`${i}:${j}`, [i, j])
      }
    }
  }
  for (const [key, [row, col]] of borderlineCellMap) {
    let cells = []
    do {
      cells = getSurroundedCells(row, col).filter(cell => {
        return cell.value === 'O' && !borderlineCellMap.has(`${cell.row}:${cell.col}`)
      })
      cells.forEach(cell => borderlineCellMap.set(`${cell.row}:${cell.col}`, [cell.row, cell.col]))
    } while (cells.length > 0)
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[i][j]
      if (cell === 'O' && !borderlineCellMap.has(`${i}:${j}`)) {
        board[i][j] = 'X'
      }
    }
  }
  return board
}

console.log(solve(
  [
    ["X","O","X","O","O","O","O"],
    ["X","O","O","O","O","O","O"],
    ["X","O","O","X","O","X","O"],
    ["O","O","X","O","X","O","X"],
    ["O","X","O","X","O","O","O"],
    ["O","O","O","O","O","O","O"],
    ["O","X","O","O","O","O","O"]
  ]
))
