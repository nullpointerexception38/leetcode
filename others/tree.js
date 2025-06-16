function bstToGst(root) {
  const traverse = (node, parent, fn) => {
    const { left, right } = node
    fn(node)
    if (left) {
      traverse(left, node, fn)
    }
    if (right) {
      traverse(right, node, fn)
    }
  }
  const nums = []
  traverse(root, null, node => nums.push(node.val))
  let sum = 0
  const map = nums.sort((a, b) => b - a)
    .reduce((m, num) => {
      sum += num
      m[num] = sum
      return m
    }, {})
  traverse(root, null, node => node.val = map[node.val])
  return root
}

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

function createTree(nums) {
  if (nums.length === 0) {
    return null
  }
  const root = new TreeNode(nums[0])
  const nodes = [root]
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i]
    const node = new TreeNode(num)
    nodes[i] = node
    const parentIndex = Math.ceil(i / 2) - 1
    const parent = nodes[parentIndex]
    const isEven = i % 2 === 0
    if (isEven) {
      parent.right = node
    } else {
      parent.left = node
    }
  }
  return root
}
