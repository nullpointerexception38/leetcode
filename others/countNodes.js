function countNodes(root) {
  if (!root) {
    return 0
  }
  let count = 0
  ;(function dfs(node) {
    count++
    const { left, right } = node
    if (left) {
      dfs(left)
    }
    if (right) {
      dfs(right)
    }
  })(root)
  return count
}
