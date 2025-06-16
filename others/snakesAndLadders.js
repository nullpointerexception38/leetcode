/**
 * 43 44 45 46 47 48 49
   42 41 40 39 38 37 36
   29 30 31 32 33 34 35
   28 27 26 25 24 23 22
   15 16 17 18 19 20 21
   14 13 12 11 10  9  8
    1  2  3  4  5  6  7
 */
console.log(snakesAndLadders(
  [[-1,-1,27,13,-1,25,-1],[-1,-1,-1,-1,-1,-1,-1],[44,-1,8,-1,-1,2,-1],[-1,30,-1,-1,-1,-1,-1],[3,-1,20,-1,46,6,-1],[-1,-1,-1,-1,-1,-1,29],[-1,29,21,33,-1,-1,-1]]
))

console.log(snakesAndLadders(
  [[1,1,-1],[1,1,1],[-1,1,1]]
))

function snakesAndLadders(board) {
  const n = board.length
  const end = n * n
  const toPos = num => {
    const _end = end - (num - 1) - 1
    const row = parseInt(_end / n, 10)
    const even = (n - row - 1) % 2 === 0
    const remainder = _end % n
    const col = even ? n - remainder - 1 : remainder
    return [row, col]
  }
  const queue = [[1, 0]]
  while (queue.length > 0) {
    const [num, move] = queue.shift()
    if (num >= end) {
      return move
    }
    for (let i = num + 1; i <= Math.min(num + 6, end); i++) {
      const [row, col] = toPos(i)
      const value = board[row][col]
      if (value === 0) {
        continue
      }
      if (value === -1) {
        const [_row, _col] = toPos(i)
        board[_row][_col] = 0
        queue.push([i, move + 1])
      }
      else {
        board[row][col] = 0
        queue.push([value, move + 1])
      }
    }
  }
  return -1
}
