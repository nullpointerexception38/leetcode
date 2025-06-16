function removeNodes(head) {
  const prevMap = new Map()
  let current = head
  let end
  while (current) {
    const { next } = current
    if (next) {
      prevMap.set(next, current)
    }
    else {
      end = current
    }
    current = current.next
  }
  current = end
  while (current) {
    const prev = prevMap.get(current)
    if (prev && current.val > prev.val) {
      const prevPrev = prevMap.get(prev)
      prevMap.set(current, prevPrev)
    } else {
      current = prevMap.get(current)
    }
  }
  const nodes = []
  current = end
  while (current) {
    nodes.unshift(current)
    current = prevMap.get(current)
  }
  for (let i = 1; i < nodes.length; i++) {
    nodes[i - 1].next = nodes[i]
  }
  return nodes[0]
}

const head = createNode(
  [1, 2, 3, 1, 2]
)

log(removeNodes(head))

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
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
