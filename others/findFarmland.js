class Group {
  constructor(i, j) {
    this.cells = [[i, j]]
  }
  addCell(i, j) {
    this.cells.push([i, j])
  }
}

console.log(findFarmland([
  [1, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 1, 1, 0]
]))

function findFarmland(land) {
  const map = new Map()
  const getKey = (i, j) => `${i}:${j}`
  const getCell = (i, j) => {
    const row = land[i]
    return row ? row[j] : null
  }
  const getAdjacentCell = (i, j) => {
    const topCell = getCell(i - 1, j)
    if (topCell === 1) {
      return { i: i - 1, j }
    }
    const leftCell = getCell(i, j - 1)
    if (leftCell === 1) {
      return { i, j: j - 1 }
    }
  }
  const groups = []
  for (let i = 0; i < land.length; i++) {
    for (let j = 0; j < land[i].length; j++) {
      const cell = land[i][j]
      if (cell !== 1) {
        continue
      }
      const key = getKey(i, j)
      const adjacentCell = getAdjacentCell(i, j)
      if (adjacentCell) {
        const existedGroup = map.get(getKey(adjacentCell.i, adjacentCell.j))
        existedGroup.addCell(i, j)
        map.set(key, existedGroup)
      }
      else {
        const group = new Group(i, j)
        groups.push(group)
        map.set(key, group)
      }
    }
  }
  return groups.map(({ cells }) => [...cells[0], ...cells[cells.length - 1]])
}
