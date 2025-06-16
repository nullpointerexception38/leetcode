function pairSum(head) {
  const nums = []
  let node = head
  while (node) {
    nums.push(node.val)
    node = node.next
  }
  const size = nums.length
  let max = 0
  for (let i = 0; i < size / 2; i++) {
    const sum = nums[i] + nums[size - i - 1]
    if (sum > max) {
      max = sum
    }
  }
  return max
}
