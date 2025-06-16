const head = createNode([3])

log(partition(head, 3))

function partition(head, x) {
  if (!head) {
    return null
  }
  let node = head
  const leftNodes = []
  const rightNodes = []
  while (node) {
    if (node.val < x) {
      leftNodes.push(node)
    } else {
      rightNodes.push(node)
    }
    node = node.next
  }
  const nodes = leftNodes.concat(rightNodes)
  for (let i = 1; i < nodes.length; i++) {
    nodes[i - 1].next = nodes[i]
  }
  nodes[nodes.length - 1].next = null
  return nodes[0]
}

function getList(head, x) {
  let node = head
  while (node) {
    if (node.val === x) {
      return node
    }
    node = node.next
  }
}

function createNode(nums) {
  const size = nums.length
  if (size === 0) {
    return []
  }
  const head = new ListNode(nums[0])
  let prev = head
  for (let i = 1; i < size; i++) {
    const node = new ListNode(nums[i])
    prev.next = node
    prev = node
  }
  return head
}

function log(head) {
  const values = []
  let node = head
  while (node) {
    values.push(node.val)
    node = node.next
  }
  console.log('[' + values.join(', ') + ']')
}

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
