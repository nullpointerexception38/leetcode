class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const n1 = new Node(1)
const n2 = new Node(2)
const n3 = new Node(3)
const n4 = new Node(4)

n1.next = n2
n2.next = n3
n3.next = n4

const res = reorderList(n1)

console.log('here', res.next)

function reorderList(head) {
  const nodes = []
  let node = head
  while (node) {
    nodes.push(node)
    node = node.next
  }
  let first = nodes.shift()
  let current = first
  const { length } = nodes
  for (let i = 0; i < length; i++) {
    if (i % 2 === 0) {
      current.next = nodes.pop()
    }
    else {
      current.next = nodes.shift()
    }
    current = current.next
  }
  current.next = null
  return first
}
