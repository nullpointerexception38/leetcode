function balanceBST(root) {
  const nodes = []
  traverse(root, null, node => nodes.push(new TreeNode(node.val)))
  const sortedNodes = nodes.slice().sort((a, b) => a.val - b.val)
  return assign(sortedNodes, 0, sortedNodes.length - 1)
}

function assign(nodes, start, end) {
  if (end < start) {
    return null
  }
  if (start === end) {
    return nodes[start]
  }
  const mid = start + Math.ceil((end - start) / 2)
  const root = nodes[mid]
  root.left = assign(nodes, start, mid - 1)
  root.right = assign(nodes, mid + 1, end)
  return root
}

function traverse(node, parent, fn) {
  const { left, right } = node
  fn(node)
  if (left) {
    traverse(left, node, fn)
  }
  if (right) {
    traverse(right, node, fn)
  }
}

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const root = new TreeNode(
  1,
  undefined,
  new TreeNode(
    2,
    undefined,
    new TreeNode(
      3,
      undefined,
      new TreeNode(4)
    )
  )
);

console.log(balanceBst(root))
