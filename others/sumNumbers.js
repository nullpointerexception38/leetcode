function sumNumbers(root) {
  let sum = 0
  ;(function traverse(node, currentSum) {
    const { left, right } = node
    const nextCurrentSum = parseInt(String(currentSum) + String(node.val), 10)
    if (left) {
      traverse(left, nextCurrentSum)
    }
    if (right) {
      traverse(right, nextCurrentSum)
    }
    if (!left && !right) {
      sum += nextCurrentSum
    }
  })(root, 0)
  return sum
}

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const root = new TreeNode(
  1,
  new TreeNode(2),
  new TreeNode(3)
)

console.log(sumNumbers(root))
