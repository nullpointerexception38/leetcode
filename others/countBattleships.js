console.log(countBattleships(
  [
    ["X",".",".","X"],
    [".",".",".","X"],
    [".",".",".","X"],
    [".",".",".","."],
    [".",".",".","X"],
    [".",".",".","X"],
  ]
))

function countBattleships(board) {
  let shipCount = 0
  const shipMap = new Map()
  const isShipSymbol = cell => cell === 'X'
  const getCell = (i, j) => {
    const row = board[i]
    return row ? row[j] : null
  }
  const getSurroundingShipCell = (i, j) => {
    const cells = []
    if (getCell(i - 1, j) === 'X') {
      return { i: i - 1, j }
    }
    if (getCell(i, j - 1) === 'X') {
      return { i, j: j - 1 }
    }
  }
  const getKey = (i, j) => `${i}:${j}`
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[i][j]
      const isShipCell = isShipSymbol(cell)
      const key = getKey(i, j)
      if (isShipCell) {
        const surroundingShipCell = getSurroundingShipCell(i, j)
        if (surroundingShipCell) {
          const existedShipNo = shipMap.get(getKey(surroundingShipCell.i, surroundingShipCell.j))
          shipMap.set(key, existedShipNo)
        } else {
          shipMap.set(key, ++shipCount)
        }
      }
    }
  }
  return shipCount
}
