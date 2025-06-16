function maxAncestorDiff(root) {
  let maxDiff = 0
  const traverse = (node, parents = []) => {
    const { left, right } = node
    const currentMaxDiff = getMaxDiff(node, parents)
    if (currentMaxDiff > maxDiff) {
      maxDiff = currentMaxDiff
    }
    if (left) {
      traverse(left, [...parents, node])
    }
    if (right) {
      traverse(right, [...parents, node])
    }
  }
  traverse(root)
  return maxDiff
}

function getMaxDiff(node, parents) {
  const value = node.val
  return parents.reduce((max, parent) => {
    const diff = Math.abs(parent.val - value)
    return diff > max ? diff : max
  }, 0)
}

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const root = new TreeNode(
  8,
  new TreeNode(
    3,
    new TreeNode(1),
    new TreeNode(
      6,
      new TreeNode(4),
      new TreeNode(7)
    )
  ),
  new TreeNode(
    10,
    null,
    new TreeNode(
      14,
      new TreeNode(13)
    )
  )
)

console.log(maxAncestorDiff(root))
