class ListNode {
  constructor(val, next) {
    this.val = val
    this.next = next
  }
}

const l1 = new ListNode(1, new ListNode(2, new ListNode(3)))
const l2 = new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7))))

console.log(mergeKLists([l1, l2]))

function mergeKLists(_lists) {
  const lists = _lists.filter(node => node)
  const { length } = lists
  if (length === 0) {
    return null
  }
  const head = lists[0]
  let node = head
  for (let i = 1; i < length; i++) {
    node = merge(node, lists[i])
  }
  return node
}

function merge(list1, list2) {
  let head1 = list1
  let head2 = list2
  if (head1.val > head2.val) {
    [head1, head2] = [head2, head1]
    list1 = list2
  }
  let prev1 = head1
  while (head2) {
    if (head1.val <= head2.val) {
      prev1 = head1
      if (head1.next) {
        head1 = head1.next
      }
      else {
        head1.next = head2
        break
      }
    }
    else {
      prev1.next = head2
      head2 = head2.next
      prev1.next.next = head1
      head1 = prev1.next
    }
  }
  return list1
}

function log(_node) {
  let str = ''
  let node = _node
  while (node) {
    str += node.val + (node.next ? ' -> ' : '')
    node = node.next
  }
  console.log(str)
}
