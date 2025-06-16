const list1 = getList([1, 2, 3])
const list2 = getList([4, 5, 6])

mergeTwoLists(list1, list2)

function mergeTwoLists(list1, list2) {
  if (!list1) {
    return list2
  }
  if (!list2) {
    return list1
  }
  let head2 = list2
  let node1 = list1
  let node2 = list2
  if (node1.val < node2.val) {
    [node1, node2] = [node2, node1]
    head2 = list1
  }
  while (node1 && node2) {
    if (node1.val <= node2.val) {
      const nextNode1 = node1.next
      node1.next = node2.next
      node2.next = node1
      node1 = nextNode1
      node2 = node2.next
    }
    else {
      if (node2.next && node1.val <= node2.next.val) {
        const nextNode1 = node1.next
        node1.next = node2.next
        node2.next = node1
        node1 = nextNode1
        node2 = node2.next
      } else {
        if (node1 && !node2.next) {
          node2.next = node1
          break
        }
        node2 = node2.next
      }
    }
  }
  log(head2)
  return head2
}

function getList(nums) {
  const head = new ListNode(nums[0])
  let current = head
  for (let i = 1; i < nums.length; i++) {
    current.next = new ListNode(nums[i])
    current = current.next
  }
  return head
}

function log(head, target) {
  const values = []
  let node = head
  while (node) {
    values.push(node === target ? `[${node.val}]` : node.val)
    node = node.next
  }
  console.log('[' + values.join(', ') + ']')
}

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
