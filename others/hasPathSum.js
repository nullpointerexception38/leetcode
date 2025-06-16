function hasPathSum(root, targetSum) {
  let answer = false
  if (!root) {
    return answer
  }
  ;(function dfs(node, sum) {
    const { left, right } = node
    if (!left && !right) {
      if (sum === targetSum) {
        answer = true
      }
    }
    if (left) {
      dfs(left, sum + left.val)
    }
    if (right) {
      dfs(right, sum + right.val)
    }
  })(root, root.val)
  return answer
}
