function allPossibleFBT(n) {
  return _allPossibleFBT(n)
}

function _allPossibleFBT(n, cache = {}) {
  if (cache[n]) {
    return cache[n]
  }
  if (n % 2 === 0) {
    return []
  }
  const trees = []
  const root = new TreeNode()
  if (n === 1) {
    return [root]
  }
  for (let i = 1; i < n; i++) {
    const leftArr = _allPossibleFBT(i, cache)
    const rightArr = _allPossibleFBT(n - i - 1, cache)
    for (const left of leftArr) {
      for (const right of rightArr) {
        const node = new TreeNode()
        node.left = left
        node.right = right
        trees.push(node)
      }
    }
  }
  cache[n] = trees
  return trees
}

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

console.log(allPossibleFBT(7))
