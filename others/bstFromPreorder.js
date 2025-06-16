function bstFromPreorder(preorder) {
  const root = new TreeNode(preorder[0])
  const nums = preorder.slice()
  nums.shift()
  for (const num of nums) {
    addNode(root, num)
  }
  return root
}

function addNode(node, value) {
  const { left, right } = node
  const isLeft = value < node.val
  const isRight = !isLeft
  if (isLeft && left) {
    return addNode(node.left, value)
  }
  if (isLeft) {
    node.left = new TreeNode(value)
    return
  }
  if (isRight && right) {
    return addNode(node.right, value)
  }
  if (isRight) {
    node.right = new TreeNode(value)
    return
  }
}

console.log(bstFromPreorder([8, 5, 1, 7, 10, 12]))

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
