function rotateRight(head, k) {
  if (k === 0) {
    return head
  }
  const [size, parentMap, lastNode] = getListSize(head)
  let times = k % size
  let last = lastNode
  while (times > 0) {
    const parent = parentMap.get(last)
    parent.next = null
    last.next = head
    head = last
    last = parent
    times--
  }
  return head
}

function getListSize(head) {
  const parentMap = new Map()
  let size = 0
  let node = head
  let parent = null
  let last = head
  while (node) {
    size++
    parentMap.set(node, parent)
    if (!node.next) {
      last = node
    }
    parent = node
    node = node.next
  }
  return [size, parentMap, last]
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
