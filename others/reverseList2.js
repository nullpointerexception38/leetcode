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

const head = createList([1,2,3,4])

logList(reverseList(head))

function reverseList(head) {
  if (!head) {
    return null
  }
  const root = new ListNode(0, head)
  let first = root
  while (root.next) {
    const { next } = root
    root.next = next.next
    next.next = first
    first = next
  }
  head.next = null
  return first
}
