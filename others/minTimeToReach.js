function minTimeToReach(moveTime) {
  const height = moveTime.length
  const width = moveTime[0].length
  const n = width * height
  const visited = Array(n)
  const distances = Array(n)
  const nodes = [[0, 0, 0]]
  const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
  const toIndex = (row, col) => row * width + col

  const binarySearch = (distance, start, end) => {
    let _start = start
    let _end = end
    while (_start <= _end) {
      const mid = (_start + _end) >> 1
      const midDistance = nodes[mid][2]
      if (midDistance === distance) {
        return mid
      }
      if (midDistance < distance) {
        _start = mid + 1
      }
      else {
        _end = mid - 1
      }
    }
    return _start
  }

  visited[0] = 1
  distances[0] = 0

  while (nodes.length) {
    const closestNode = nodes.shift()
    const [row, col] = closestNode
    const index = toIndex(row, col)
    if (typeof distances[index] === 'undefined') {
      break
    }
    for (const [rowDiff, colDiff] of directions) {
      const _row = row + rowDiff
      const _col = col + colDiff
      const _index = toIndex(_row, _col)
      if (typeof visited[_index] === 'undefined' &&
        _row >= 0 && _row < height && _col >= 0 && _col < width) {
        const newDistance = Math.max(distances[index] ?? Infinity, moveTime[_row][_col])
        if (newDistance < (distances[_index] ?? Infinity)) {
          distances[_index] = newDistance + 1
        }
        const distance = distances[_index] ?? Infinity
        const insertIndex = binarySearch(distance, 0, nodes.length - 1)
        nodes.splice(insertIndex, 0, [_row, _col, distance])
        visited[_index] = 1
      }
    }
  }
  return distances[n - 1]
}
