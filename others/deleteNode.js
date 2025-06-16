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
    node.left = value !== null ? new TreeNode(value) : null
    nodes.push(node.left)
    value = _nums.shift()
    node.right = value !== null ? new TreeNode(value) : null
    nodes.push(node.right)
    i++
  }
  return root
}

console.log(require('util').inspect(deleteNode(
  createTree([50,30,70,null,40,60,80]),
  50
), { depth: null }))

function deleteNode(root, key) {
  if (!root) {
    return null
  }
  if (root.val === key && root.left && root.right) {
    let smallestNode = root.right
    while (smallestNode.left) {
      smallestNode = smallestNode.left
    }
    root.val = smallestNode.val
    root.right = deleteNode(root.right, smallestNode.val)
    return root
  }
  if (root.val === key) {
    return root.left ?? root.right
  }
  root.left = deleteNode(root.left, key)
  root.right = deleteNode(root.right, key)
  return root
}
