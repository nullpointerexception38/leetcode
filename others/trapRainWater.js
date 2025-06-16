/**
 * @param {number[][]} matrix
 * @return {number}
 */
function trapRainWater(matrix) {
  return _trapRainWater(matrix, 0)
}

function _trapRainWater(matrix, previousVolume) {
  logMatrix(matrix)
  const layerMap = new Map()
  const crossCellMap = getCrossCellMap(matrix)
  if (crossCellMap.size === 0) {
    return previousVolume
  }
  let minHeight = -1
  for (const [key, cell] of crossCellMap) {
    const [row, col] = cell
    const height = matrix[row][col]
    const cells = layerMap.get(height) ?? []
    cells.push(cell)
    layerMap.set(height, cells)
    if (minHeight === -1 || height < minHeight) {
      minHeight = height
    }
  }
  const layerCrossCellMap = new Map()
  const cells = layerMap.get(minHeight)
  for (const cell of cells) {
    const key = cell.slice(0, 2).join(':')
    layerCrossCellMap.set(key, cell)
  }
  const volumeRows = processLayer({ matrix, crossCellMap: layerCrossCellMap })
  const layerVolume = volumeRows.reduce((sum, row) => sum + row[2], 0)
  if (layerVolume === 0) {
    return previousVolume
  }
  volumeRows.forEach(([row, col, volume]) => {
    matrix[row][col] += volume
  })
  return _trapRainWater(matrix, previousVolume + layerVolume)
}

function processLayer({ crossCellMap, matrix }) {
  const volumeRows = []
  const usedCells = new Set()
  for (const [key, crossCell] of crossCellMap) {
    if (usedCells.has(key)) {
      continue
    }
    const [adjacentCells, wallHeight] = analyzeCrossCell({
      crossCell,
      crossCellMap,
      matrix
    })
    console.log({ adjacentCells, wallHeight })
    adjacentCells.forEach(key => {
      const [_row, _col] = key.split(':')
      const cellHeight = matrix[_row][_col]
      if (wallHeight > cellHeight) {
        const volume = wallHeight - cellHeight
        volumeRows.push([_row, _col, volume])
      }
      usedCells.add(`${_row}:${_col}`)
    })
  }
  return volumeRows
}

function analyzeCrossCell({ crossCell, crossCellMap, matrix }) {
  const adjacentCells = new Set()
  let minHeight = -1
  ;(function analyze(cell) {
    const [row, col] = cell
    const top = [row - 1, col]
    const right = [row, col + 1]
    const bottom = [row + 1, col]
    const left = [row, col - 1]
    const cellHeight = matrix[row][col]
    adjacentCells.add([row, col].join(':'))
    ;[top, right, bottom, left].forEach(_cell => {
      const key = _cell.slice(0, 2).join(':')
      const [_row, _col] = _cell
      const _cellHeight = matrix[_row][_col]
      if (adjacentCells.has(key)) {
        //
      } else if (crossCellMap.has(key) && cellHeight === _cellHeight) {
        analyze(_cell)
      } else {
        if (minHeight === -1 || _cellHeight < minHeight) {
          minHeight = _cellHeight
        }
      }
    })
  })(crossCell)
  return [adjacentCells, minHeight]
}

function range(start, end) {
  const arr = []
  for (let i = start; i < end; i++) {
    arr.push(i)
  }
  return arr
}

function getCrossCellMap(matrix) {
  const height = matrix.length
  const width = matrix[0].length
  const preCrossCellMap = new Map()
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const [isCrossCell, top, right, bottom, left] = isCross({ matrix, row: i, col: j })
      if (isCrossCell) {
        preCrossCellMap.set(`${i}:${j}`, [i, j, top, right, bottom, left])
      }
    }
  }
  const crossCellMap = new Map()
  for (const [key, cell] of preCrossCellMap) {
    const [row, col, top, right, bottom, left] = cell
    const topOk = range(top + 1, row).every(_row => preCrossCellMap.has(`${_row}:${col}`))
    if (!topOk) {
      continue
    }
    const rightOk = range(col, right).every(_col => preCrossCellMap.has(`${row}:${_col}`))
    if (!rightOk) {
      continue
    }
    const bottomOk = range(row, bottom).every(_row => preCrossCellMap.has(`${_row}:${col}`))
    if (!bottomOk) {
      continue
    }
    const leftOk = range(left + 1, col).every(_col => preCrossCellMap.has(`${row}:${_col}`))
    if (!leftOk) {
      continue
    }
    crossCellMap.set(key, cell)
  }
  return crossCellMap
}

function isCross(context) {
  const { matrix, row, col } = context
  const height = matrix.length
  const width = matrix[0].length
  const cell = matrix[row][col]
  let hasTop = false
  let hasRight = false
  let hasBottom = false
  let hasLeft = false
  let r1 = row
  let r2 = row
  let c1 = col
  let c2 = col
  while (
    (!hasTop && r1 > 0) ||
    (!hasRight && c2 < width - 1) ||
    (!hasBottom && r2 < height - 1) ||
    (!hasLeft && c1 > 0)
  ) {
    if (!hasTop && r1 > 0) {
      hasTop = matrix[--r1][col] > cell
    }
    if (!hasRight && c2 < width - 1) {
      hasRight = matrix[row][++c2] > cell
    }
    if (!hasBottom && r2 < height - 1) {
      hasBottom = matrix[++r2][col] > cell
    }
    if (!hasLeft && c1 > 0) {
      hasLeft = matrix[row][--c1] > cell
    }
  }
  const valid = hasTop && hasRight && hasBottom && hasLeft
  return [valid, r1, c2, r2, c1]
}

function logMatrix(matrix) {
  let str = ''
  for (let i = 0; i < matrix.length; i++) {
    str += matrix[i].join(`\t`)
    str += `\n`
  }
  console.log(str)
}

/*console.log(trapRainWater(
  [
    [1,4,3,1,3,2],
    [3,2,1,3,2,4],
    [2,3,3,2,3,1]
  ]
))
*/

/*console.log(trapRainWater(
  [
    [1,3,1,1],
    [3,1,1,3],
    [1,3,1,1]
  ]
))*/

/*console.log(trapRainWater(
  [
    [14, 17, 18, 16, 14, 16],
    [17,  3, 10,  2,  3,  8],
    [11, 10,  4,  7,  1,  7],
    [13,  7,  2,  9,  8, 10],
    [13,  1,  3,  4,  8,  6],
    [20,  3,  3,  9,  10, 8]
  ]
))*/

// Expected 11, actual 6
console.log(trapRainWater(
  [
    [14, 20, 11, 19, 19, 16],
    [11, 10,  7,  4,  9,  6],
    [17,  2,  2,  6, 10,  9],
    [15,  9,  2,  1,  4,  1],
    [15,  5,  5,  5,  8,  7],
    [14,  2,  8,  6, 10,  7]
  ]
))
