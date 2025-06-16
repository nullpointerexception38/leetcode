function generateTrees(n) {
  const dp = [[null], [new TreeNode(1)]]
  return (function f(n) {
    if (typeof dp[n] !== 'undefined') {
      return dp[n]
    }
    const nodes = []
    for (let i = 0; i <= n - 1; i++) {
      const rootValue = i + 1
      for (const left of f(i)) {
        for (const right of f(n - i - 1)) {
          const root = new TreeNode(i + 1)
          if (left !== null) {
            root.left = clone(left, 0)
          }
          if (right !== null) {
            root.right = clone(right, i + 1)
          }
          nodes.push(root)
        }
      }
    }
    dp[n] = nodes
    return nodes
  })(n)
}

function clone(root, extraValue) {
  const clonedRoot = new TreeNode(root.val + extraValue)
  ;(function dfs(node, cloned) {
    const { left, right } = node
    if (left) {
      cloned.left = new TreeNode(left.val + extraValue)
      dfs(left, cloned.left)
    }
    if (right) {
      cloned.right = new TreeNode(right.val + extraValue)
      dfs(right, cloned.right)
    }
  })(root, clonedRoot)
  return clonedRoot
}
