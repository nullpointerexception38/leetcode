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

const head = createList([7,7])

logList(removeElements(head, 7))

function removeElements(head, value) {
  const rm = node => {
    let _node = node
    while (_node) {
      if (_node.val !== value) {
        break
      }
      _node = _node.next
    }
    return _node
  }
  const _head = rm(head)
  let node = _head
  while (node) {
    const { next } = node
    if (next) {
      node.next = rm(next)
      node = node.next
    } else {
      node = next
    }
  }
  return _head
}
