function exist(board, word) {
  const [firstChar] = word
  const startCells = getCellsByChar(board, firstChar)
  if (word.length > 1) {
    const lastChar = word[word.length - 1]
    const startCells2 = getCellsByChar(board, lastChar)
    if (startCells2.length < startCells.length) {
      const reversedWord = word.split('').reverse().join('')
      return _exist(board, reversedWord, startCells2)
    }
  }
  return _exist(board, word, startCells)
}

function getCellsByChar(board, char) {
  const cells = []
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === char) {
        cells.push([i, j])
      }
    }
  }
  return cells
}

function _exist(board, word, startCells) {
  for (const cell of startCells) {
    const res = dfs(board, word.slice(1), cell, {})
    if (res) {
      return true
    }
  }
  return false
}

function cellToKey(cell) {
  const [row, col] = cell
  return `${row}:${col}`
}

function dfs(board, word, cell, used) {
  used[cellToKey(cell)] = true
  if (word === '') {
    return true
  }
  const [firstChar] = word
  const [row, col] = cell
  const height = board.length
  const width = board[0].length
  const top = board[row - 1]?.[col] ?? ''
  const right = board[row][col + 1] ?? ''
  const bottom = board[row + 1]?.[col] ?? ''
  const left = board[row][col - 1] ?? ''
  const nextWord = word.slice(1)
  const fns = []
  const key = cellToKey(cell)
  if (top === firstChar && !used[`${row - 1}:${col}`]) {
    fns.push(() => dfs(board, nextWord, [row - 1, col], Object.assign({}, used)))
  }
  if (right === firstChar && !used[`${row}:${col + 1}`]) {
    fns.push(() => dfs(board, nextWord, [row, col + 1], Object.assign({}, used)))
  }
  if (bottom === firstChar && !used[`${row + 1}:${col}`]) {
    fns.push(() => dfs(board, nextWord, [row + 1, col], Object.assign({}, used)))
  }
  if (left === firstChar && !used[`${row}:${col - 1}`]) {
    fns.push(() => dfs(board, nextWord, [row, col - 1], Object.assign({}, used)))
  }
  if (fns.length === 0) {
    return false
  }
  return fns.some(fn => fn())
}

console.log(exist(
  [["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"]],
  "AAAAAAAAAAAAAAB"
))
