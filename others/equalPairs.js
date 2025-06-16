function equalPairs(grid) {
  const n = grid.length
  const map = {}
  for (let i = 0; i < n; i++) {
    const key = grid[i].toString()
    const count = map[key] ?? 0
    map[key] = count + 1
  }
  let count = 0
  for (let i = 0; i < n; i++) {
    let key = ''
    for (let j = 0; j < n; j++) {
      const comma = j === n - 1 ? '' : ','
      key += grid[j][i] + comma
    }
    const rowCount = map[key]
    if (typeof rowCount !== 'undefined') {
      count += rowCount
    }
  }
  return count
}
