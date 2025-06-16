function reverseList(head) {
  let node = head
  let clonedNext
  while (node) {
    const cloned = clonedNext || new ListNode(node.val)
    const { next } = node
    if (!next) {
      return clonedNext || cloned
    }
    clonedNext = new ListNode(next.val, cloned)
    node = next
  }
  return null
}

// 0 -> 1 -> 2

const head = new ListNode(0, new ListNode(1))

console.log(reverseList(head))

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
