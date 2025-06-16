function pacificAtlantic(heights) {
  const h = heights.length
  const w = heights[0].length
  const pCells = [
    ...range(h).map((_, i) => [i, 0]),
    ...range(w).map((_, j) => [0, j])
  ]
  const pSet = search(heights, pCells)
  const aCells = [
    ...range(h).map((_, i) => [i, w - 1]),
    ...range(w).map((_, j) => [h - 1, j])
  ]
  const aSet = search(heights, aCells)
  const res = []
  for (const pKey of pSet) {
    for (const aKey of aSet) {
      if (pKey === aKey) {
        res.push(keyToCell(pKey))
      }
    }
  }
  return res
}

function search(heights, cells) {
  const set = new Set()
  for (const cell of cells) {
    dfs(cell, set, heights)
  }
  log(heights, set)
  return set
}

function range(n) {
  return Array.from({ length: n })
}

function dfs(cell, set, heights) {
  set.add(cellToKey(cell))
  const [row, col] = cell
  const height = heights[row][col]
  const top = heights[row - 1]?.[col] ?? -1
  const right = heights[row][col + 1] ?? -1
  const bottom = heights[row + 1]?.[col] ?? -1
  const left = heights[row][col - 1] ?? -1

  const topKey = `${row - 1}:${col}`
  if (top >= height && top !== -1 && !set.has(topKey)) {
    dfs(keyToCell(topKey), set, heights)
  }
  const rightKey = `${row}:${col + 1}`
  if (right >= height && right !== -1 && !set.has(rightKey)) {
    dfs(keyToCell(rightKey), set, heights)
  }
  const bottomKey = `${row + 1}:${col}`
  if (bottom >= height && bottom !== -1 && !set.has(bottomKey)) {
    dfs(keyToCell(bottomKey), set, heights)
  }
  const leftKey = `${row}:${col - 1}`
  if (left >= height && left !== -1 && !set.has(leftKey)) {
    dfs(keyToCell(leftKey), set, heights)
  }
}

function keyToCell(key) {
  return key.split(':').map(v => parseInt(v, 10))
}

function cellToKey(cell) {
  const [row, col] = cell
  return `${row}:${col}`
}

function log(heights, set) {
  if (Array.isArray(set)) {
    set = new Set(set.map(cellToKey))
  }
  let str = ''
  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights[i].length; j++) {
      str += set.has(`${i}:${j}`) ? `[${heights[i][j]}]` : ` ${heights[i][j]} `
    }
    str += `\n`
  }
  console.log(str)
}


let heights = [
  [1,2,2,3,5],
  [3,2,3,4,4],
  [2,4,5,3,1],
  [6,7,1,4,5],
  [5,1,1,2,4]
]

heights = [
  [2, 1],
  [1, 2]
]

const res = pacificAtlantic(heights)
console.log('res')
log(heights, res)
