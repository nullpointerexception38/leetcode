
function createNode(nums) {
  const size = nums.length
  if (size === 0) {
    return []
  }
  const head = new ListNode(nums[0])
  let prev = head
  for (let i = 1; i < size; i++) {
    const node = new ListNode(nums[i])
    prev.next = node
    prev = node
  }
  return head
}

function log(head) {
  const values = []
  let node = head
  while (node) {
    values.push(node.val)
    node = node.next
  }
  console.log('[' + values.join(', ') + ']')
}

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
