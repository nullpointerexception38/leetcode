const l1 = createNode([2,4,9])
const l2 = createNode([5,6,4,9])

log(addTwoNumbers(l1, l2))

function addTwoNumbers(l1, l2) {
  let size1 = getListSize(l1)
  let size2 = getListSize(l2)
  let node1 = l1
  let node2 = l2
  if (size1 < size2) {
    [node1, node2] = [node2, node1]
  }
  let head = new ListNode(0)
  let node3 = head
  let remainder = 0
  while (node1) {
    const sum = node1.val + (node2 ? node2.val : 0) + remainder
    const value = sum % 10
    remainder = Math.floor(sum / 10)
    node3.val = value
    node1 = node1.next
    if (node2) {
      node2 = node2.next
    }
    if (node1 && node3.next === null) {
      node3.next = new ListNode(0)
    }
    if (node3.next === null && remainder > 0) {
      node3.next = new ListNode(remainder)
    }
    node3 = node3.next
  }
  return head
}

function getListSize(list) {
  let size = 0
  let node = list
  while (node) {
    size++
    node = node.next
  }
  return size
}

function createNode(nums) {
  const size = nums.length
  if (size === 0) {
    return null
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
