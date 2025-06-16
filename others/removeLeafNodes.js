function removeLeafNodes(root, target) {
  const traverse = (node, parent, options = {}) => {
    const { left, right } = node
    if (left) {
      traverse(left, node, { isLeft: true, grandParent: parent, options })
    }
    if (right) {
      traverse(right, node, { isRight: true, grandParent: parent, options })
    }
    const isTarget = !left && !right && node.val === target
    if (isTarget && options.isLeft) {
      parent.left = null
      traverse(parent, options.grandParent, options.options)
    }
    else if (isTarget && options.isRight) {
      parent.right = null
      traverse(parent, options.grandParent, options.options)
    }
  }
  traverse(root)
  return root
}

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
