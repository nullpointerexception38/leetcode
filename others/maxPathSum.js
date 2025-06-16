function maxPathSum(root) {
  let answer = root.val
  ;(function walk(node) {
    if (!node) {
      return Number.MIN_SAFE_INTEGER
    }
    const { val: value } = node
    const leftSum = Math.max(walk(node.left), 0)
    const rightSum = Math.max(walk(node.right), 0)
    const sum = value + leftSum + rightSum
    answer = Math.max(answer, sum)
    return value + Math.max(leftSum, rightSum)
  })(root)
  return answer
}
