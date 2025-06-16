console.log(nearestExit(
  [
    ["+",".","+","+","+","+","+"],
    ["+",".","+",".",".",".","+"],
    ["+",".","+",".","+",".","+"],
    ["+",".",".",".","+",".","+"],
    ["+","+","+","+","+",".","+"]
  ],
  [0, 1]
))


function nearestExit(maze, entrance) {
  const queue = [[entrance, 0]]
  const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
  maze[entrance[0]][entrance[1]] = '+'
  while (queue.length > 0) {
    const [[row, col], step] = queue.shift()
    for (const [_row, _col] of directions) {
      const cell = maze[row + _row]?.[col + _col]
      if (typeof cell === 'undefined' && step > 0) {
        return step
      }
      if (cell === '.') {
        maze[row + _row][col + _col] = '+'
        queue.push([[row + _row, col + _col], step + 1])
      }
    }
  }
  return -1
}
