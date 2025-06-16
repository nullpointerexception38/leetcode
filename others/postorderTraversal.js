class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function createTree(nums) {
  if (nums.length === 0) {
    return null
  }
  const _nums = nums.slice()
  const root = new TreeNode(_nums.shift())
  const nodes = [root]
  let i = 0
  while (_nums.length > 0) {
    const node = nodes[i]
    if (node === null) {
      i++
      continue
    }
    let value = _nums.shift()
    node.left = value ? new TreeNode(value) : null
    nodes.push(node.left)
    value = _nums.shift()
    node.right = value ? new TreeNode(value) : null
    nodes.push(node.right)
    i++
  }
  return root
}

const root = createTree([37,-34,-48,null,-100,-100,48,null,null,null,null,-54,null,-71,-22,null,null,null,8])

console.log(postorderTraversal(root))

function postorderTraversal(root) {
  if (!root) {
    return []
  }
  const res = []
  const stack = [root]
  while (stack.length > 0) {
    const node = stack[stack.length - 1]
    const { left, right } = node
    if (!left && !right) {
      stack.pop()
      res.push(node.val)
    }
    if (right) {
      stack.push(right)
      node.right = null
    }
    if (left) {
      stack.push(left)
      node.left = null
    }
  }
  return res
}
