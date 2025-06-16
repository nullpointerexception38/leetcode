class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

const head = numsToList([1, 1, 1])

log(deleteDuplicates(head))

function numsToList(nums) {
  if (nums.length === 0) {
    return null
  }
  const head = new ListNode(nums[0])
  let node = head
  for (let i = 1; i < nums.length; i++) {
    const next = new ListNode(nums[i])
    node.next = next
    node = next
  }
  return head
}

function log(head) {
  let node = head
  let str = ''
  while (node) {
    str += `${node.val}` + (node.next ? ' -> ' : '')
    node = node.next
  }
  console.log(str)
}

function deleteDuplicates(head) {
  let node = head
  while (node && node.next) {
    const next = node.next
    const nextNext = next?.next
    if (node.val === next.val) {
      if (nextNext) {
        node.next = nextNext
        continue
      }
      else {
        node.next = null
      }
    }
    else {
      node = node.next
    }
  }
  return head
}
