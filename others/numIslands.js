const getKey = (row, col) => `${row}:${col}`

class Island {
  constructor(row, col) {
    this.cells = new Set([getKey(row, col)])
  }

  add(row, col) {
    this.cells.add(getKey(row, col))
  }

  has(row, col) {
    return this.cells.has(getKey(row, col))
  }
}

console.log(numIslands(
  [
    ["1","1","1"],
    ["0","1","0"],
    ["1","1","1"]
  ]
))

function numIslands(grid) {
  const rows = grid.length
  const cols = grid[0].length
  const islands = []
  const getSurroundedCells = (row, col) => {
    return [
      [row - 1, col],
      [row, col + 1],
      [row + 1, col],
      [row, col - 1]
    ].filter(([posRow, posCol]) => 0 <= posRow && posRow < rows && 0 <= posCol && posCol <= cols)
    .filter(([posRow, posCol]) => grid[posRow][posCol] === '1')
  }

  const walked = new Set()

  const search = (row, col, existedIsland) => {
    const key = getKey(row, col)
    if (walked.has(key)) {
      return
    }
    walked.add(key)
    getSurroundedCells(row, col).forEach(([posRow, posCol]) => {
      existedIsland.add(posRow, posCol)
      search(posRow, posCol, existedIsland)
    })
  }


  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (walked.has(getKey(row, col))) {
        continue
      }
      const cell = grid[row][col]
      if (cell === '1') {
        const island = new Island(row, col)
        islands.push(island)
        search(row, col, island)
      }
    }
  }

  return islands.length
}
