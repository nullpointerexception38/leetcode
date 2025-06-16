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

const a = createList(['a1', 'a2', 'c1', 'c2', 'c3'])
const b = createList(['b1', 'b2', 'b3'])

function findList(head, value) {
  let node = head
  while (node) {
    if (node.val === value) {
      return node
    }
    node = node.next
  }
  return null
}

function logList(head) {
  let node = head
  let str = ''
  while (node) {
    str += `${node.val}` + (node.next ? ' -> ' : '')
    node = node.next
  }
  console.log(str)
  return null
}

const c1 = findList(a, 'c1')
const b3 = findList(b, 'b3')
b3.next = c1

logList(a)
logList(b)

console.log(getIntersectionNode(a, b))

function getIntersectionNode(headA, headB) {
  const walk = (head, fn) => {
    let node = head
    while (node) {
      const stop = fn(node)
      if (stop) {
        break
      }
      node = node.next
    }
  }
  const used = new Set()
  let target = null
  walk(headA, node => {
    used.add(node)
  })
  walk(headB, node => {
    if (used.has(node)) {
      target = node
      return true
    }
  })
  return target
}
