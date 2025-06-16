class TreeNode {
  constructor(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
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

const root = createTree([1,2,3,4,null,2])

console.log(isSymmetric(root))

function isSymmetric(root) {
  const invertedRoot = invertTree(root)
  return isSameTree(root, invertedRoot)
}

function isSameTree(a, b) {
  return (function dfs(a, b) {
    const aValue = a ? a.val : null
    const bValue = b ? b.val : null
    if (aValue !== bValue) {
      return false
    }
    if (aValue === null && bValue === null) {
      return true
    }
    if (!dfs(a?.left, b?.left)) {
      return false
    }
    if (!dfs(a?.right, b?.right)) {
      return false
    }
    return true
  })(a, b)
}

function invertTree(root) {
  if (!root) {
    return root
  }
  const clonedRoot = new TreeNode(root.val, root.left, root.right)
  ;(function dfs(node) {
    const { left, right } = node
    node.left = right ? new TreeNode(right.val, right.left, right.right) : null
    node.right = left ? new TreeNode(left.val, left.left, left.right) : null
    if (node.left) {
      dfs(node.left)
    }
    if (node.right) {
      dfs(node.right)
    }
  })(clonedRoot)
  return clonedRoot
}
