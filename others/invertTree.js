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

const root = createTree([1,2,3,4,5,6,7])

console.log(invertTree(root))

function invertTree(root) {
  if (!root) {
    return root
  }
  (function dfs(node) {
    const { left, right } = node
    node.left = right
    node.right = left
    if (node.left) {
      dfs(node.left)
    }
    if (node.right) {
      dfs(node.right)
    }
  })(root)
  return root
}
