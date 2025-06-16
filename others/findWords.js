class TrieNode {
  constructor() {
    this.word = ''
    this.nodeMap = new Map()
  }

  add(char) {
    const existed = this.nodeMap.get(char)
    if (existed) {
      return existed
    }
    const node = new TrieNode(char)
    this.nodeMap.set(char, node)
    return node
  }

  get(char) {
    return this.nodeMap.get(char)
  }
}

function findWords(board, words) {
  const root = new TrieNode()
  for (const word of words) {
    let node = root
    for (const char of word) {
      node = node.add(char)
    }
    node.word = word
  }
  const width = board[0].length
  const height = board.length
  const answer = new Set()
  const walk = (row, col, node) => {
    if (row < 0 || row >= height || col < 0 || col >= width || board[row][col] === '#') {
      return
    }
    const char = board[row][col]
    const next = node.get(char)
    if (!next) {
      return
    }
    if (next.word) {
      answer.add(next.word)
    }
    board[row][col] = '#'
    walk(row - 1, col, next)
    walk(row, col + 1, next)
    walk(row + 1, col, next)
    walk(row, col - 1, next)
    board[row][col] = char
  }
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      walk(i, j, root)
    }
  }
  return Array.from(answer)
}
