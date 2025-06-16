class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function createList(nums) {
  if (nums.length === 0) {
    return null
  }
  const head = new ListNode(nums[0])
  let node = head
  for (let i = 1; i < nums.length; i++) {
    node.next = new ListNode(nums[i])
    node = node.next
  }
  return head
}

function logList(head) {
  let node = head
  let str = ''
  while (node) {
    str += node.val + (node.next ? ' -> ' : '')
    node = node.next
  }
  console.log(str)
}

const head = createList([2])

console.log(deleteMiddle(head))

function deleteMiddle(head) {
  let node = head
  let node2 = head.next
  let prev
  if (!node2) {
    return null
  }
  while (node2) {
    prev = node
    node = node.next
    node2 = node2.next?.next
  }
  prev.next = node.next
  logList(head)
  return head
}
