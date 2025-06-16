function isValidSudoku(board) {
  for (let i = 0; i < board.length; i++) {
    const used = new Map()
    const used2 = new Map()
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[i][j]
      const cell2 = board[j][i]
      if (used.has(cell)) {
        return false
      }
      if (used2.has(cell2)) {
        return false
      }
      if (cell !== '.') {
        used.set(cell, true)
      }
      if (cell2 !== '.') {
        used2.set(cell2, true)
      }
    }
  }
  for (let i = 0; i < board.length; i += 3) {
    for (let j = 0; j < board.length; j += 3) {
      const used = new Map()
      for (let a = i; a < i + 3; a++) {
        for (let b = j; b < j + 3; b++) {
          const cell = board[a][b]
          if (used.has(cell)) {
            return false
          }
          if (cell !== '.') {
            used.set(cell, true)
          }
        }
      }
    }
  }
  return true
}

console.log(isValidSudoku(
  [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ]
))
