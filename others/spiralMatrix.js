function spiralMatrix(m, n, head) {
  const matrix = createMatrix(m, n)
  const outOfBound = ({ i, j }) => !(0 <= i && i < m && 0 <= j && j < n)
  const taken = ({ i, j }) => matrix[i][j] !== -1
  const getNextPos = (i, j, direction) => {
    switch (direction) {
      case 'UP':
        return { i: i - 1, j }
      case 'RIGHT':
        return { i, j: j + 1 }
      case 'DOWN':
        return { i: i + 1, j }
      case 'LEFT':
        return { i, j: j - 1 }
    }
  }
  const getNextDirection = direction => {
    const directions = ['UP', 'RIGHT', 'DOWN', 'LEFT']
    const index = directions.indexOf(direction)
    return directions[(index + 1) % 4]
  }
  let direction = 'RIGHT'
  let i = 0
  let j = 0
  let node = head
  while (node) {
    matrix[i][j] = node.val
    let nextPos = getNextPos(i, j, direction)
    if (outOfBound(nextPos) || taken(nextPos)) {
      direction = getNextDirection(direction)
      nextPos = getNextPos(i, j, direction)
    }
    i = nextPos.i
    j = nextPos.j
    node = node.next
  }
  return matrix
}

function createMatrix(m, n) {
  return Array.from({ length: m })
    .map(() => Array.from({ length: n }).fill(-1))
}

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

function createList(arr) {
  let head = new ListNode(arr[0])
  let node = head
  for (let i = 1; i < arr.length; i++) {
    node.next = new ListNode(arr[i])
    node = node.next
  }
  return head
}

console.log(spiralMatrix(3, 5, createList([3,0,2,6,8,1,7,9,4,2,5,5,0])))
