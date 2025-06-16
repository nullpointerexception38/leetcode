class TreeNode {
  constructor(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))

console.log(inorderTraversal(root))

function inorderTraversal(root) {
  const stack = []
  let current = root
  const res = []
  while (current || stack.length > 0) {
    if (current) {
      stack.push(current)
      current = current.left
    }
    else {
      const node = stack.pop()
      res.push(node.val)
      current = node.right
    }
  }
  return res
}
