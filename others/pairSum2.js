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

console.log(pairSum(head))

function pairSum(head) {
  let node = head
  let fastNode = head.next
  let first = head
  let maxSum = 0
  while (fastNode?.next) {
    fastNode = fastNode.next?.next
    const { next } = node
    if (next) {
      node.next = next.next
      next.next = first
      first = next
    }
  }
  if (!fastNode) {
    first = first.next
  }
  node = node.next
  while (node) {
    maxSum = Math.max(maxSum, first.val + node.val)
    first = first.next
    node = node.next
  }
  return maxSum
}
