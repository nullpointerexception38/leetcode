function lowestCommonAncestor(root, p, q) {
  const parentMap = new Map()
  let pNode = null
  let qNode = null
  ;(function walk(node) {
    const value = node.val
    if (value === p) {
      pNode = node
    }
    if (value === q) {
      qNode = node
    }
    if (pNode && qNode) {
      return
    }
    const { left, right } = node
    if (left) {
      parentMap.set(left, node)
      walk(left)
    }
    if (right) {
      parentMap.set(right, node)
      walk(right)
    }
  })(root)
  const pSet = new Set()
  let parent = pNode
  do {
    pSet.add(parent.val)
    parent = parentMap.get(parent.val)
  } while (parent)
  parent = qNode
  do {
    if (pSet.has(parent.val)) {
      return parent.val
    }
    parent = parentMap.get(parent.val)
  } while (parent)
}
