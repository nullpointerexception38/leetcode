function minDepth(root) {
  if (!root) {
    return 0
  }
  let min = Infinity
  ;(function dfs(node, depth) {
    const { left, right } = node
    if (!left && !right) {
      min = Math.min(min, depth)
    }
    if (left) {
      dfs(left, depth + 1)
    }
    if (right) {
      dfs(right, depth + 1)
    }
  })(root, 1)
  return min
}
