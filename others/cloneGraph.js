class Node {
  constructor(value) {
    this.val = value
    this.neighbors = []
  }
}

const n1 = new Node(1)
const n2 = new Node(2)
const n3 = new Node(3)
const n4 = new Node(4)

n1.neighbors = [n2, n3, n4]
n2.neighbors = [n1, n3]
n3.neighbors = [n1, n2, n4]
n4.neighbors = [n1, n3]

const node = new Node(1)

function cloneGraph(node) {
  if (!node) {
    return null
  }
  const map = new Map()
  const walked = new Set()
  const nodes = [node]
  const getNode = value => map.get(value) ?? new Node(value)
  while (nodes.length > 0) {
    const target = nodes.shift()
    if (walked.has(target.val)) {
      continue
    }
    const value = target.val
    const cloned = getNode(value)
    clonedNeighbors = target.neighbors.map(neighbor => getNode(neighbor.val))
    cloned.neighbors = clonedNeighbors
    map.set(value, cloned)
    cloned.neighbors.forEach(n => {
      map.set(n.val, n)
    })
    walked.add(value)
    nodes.push(...target.neighbors)
  }
  return map.get(1)
}
