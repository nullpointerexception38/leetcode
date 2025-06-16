function searchBST(root, value) {
  return (function dfs(node) {
    if (node.val === value) {
      return node
    }
    const { left, right } = node
    const leftNode = left ? dfs(left) : null
    const rightNode = right ? dfs(right): null
    return leftNode ?? rightNode
  })(root)
}
