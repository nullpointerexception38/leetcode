const root = new TreeNode()

function kthSmallest(root, k) {
  const values = []
  ;(function traverse(node) {
    const { left, right } = node
    values.push(node.val)
    if (left) {
      traverse(left)
    }
    if (right) {
      traverse(right)
    }
  })(root)
  return values.sort((a, b) => a - b)[k - 1]
}

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
