class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

const root = new TreeNode(0)
const n1 = new TreeNode(1)
const n2 = new TreeNode(2)
const n3 = new TreeNode(3)
const n4 = new TreeNode(4)

root.left = n1
root.right = n2
n1.left = n3
n1.right = n4

console.log(isBalanced(root))

function isBalanced(root) {
  if (!root) {
    return true
  }
  let answer = true
  ;(function dfs(node) {
    const { left, right } = node
    if (!left && !right) {
      return 0
    }
    const leftHeight = left ? dfs(left) : -1
    const rightHeight = right ? dfs(right) : -1
    if (Math.abs(leftHeight - rightHeight) > 1) {
      answer = false
    }
    return 1 + Math.max(leftHeight, rightHeight)
  })(root)
  return answer
}
