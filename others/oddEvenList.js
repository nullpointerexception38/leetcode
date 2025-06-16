function oddEvenList(head) {
  const evenHead = new ListNode()
  let node = head
  let even = evenHead
  while (node) {
    const { next } = node
    if (next) {
      node.next = next.next
      next.next = null
      even.next = next
      even = next
      if (!node.next) {
        node.next = evenHead.next
        break
      }
    }
    else {
      node.next = evenHead.next
      break
    }
    node = node.next
  }
  return head
}
