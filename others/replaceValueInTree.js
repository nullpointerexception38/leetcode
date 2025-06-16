function replaceValueInTree(root) {
  const nodes = [[root, 0]]
  const depthCountMap = new Map()
  const depthNodeMap = new Map()
  while (nodes.length > 0) {
    const [node, depth, parent] = nodes.shift()
    const depthCount = depthCountMap.get(depth) ?? 0
    depthCountMap.set(depth, depthCount + node.val)

    const depthNodes = depthNodeMap.get(depth) ?? []
    depthNodes.push(node)
    depthNodeMap.set(depth, depthNodes)

    const { left, right } = node
    if (left) {
      nodes.push([left, depth + 1, node])
    }
    if (right) {
      nodes.push([right, depth + 1, node])
    }
  }
  depthNodeMap.forEach((nodes, depth) => {
    if (depth < 2) {
      nodes.forEach(node => node.val = 0)
      return
    }
    const parents = depthNodeMap.get(depth - 1)
    const depthCount = depthCountMap.get(depth)
    parents.forEach(parent => {
      const { left, right } = parent
      const cousinSum = depthCount - ((left?.val ?? 0) + (right?.val ?? 0))
      if (left) {
        left.val = cousinSum
      }
      if (right) {
        right.val = cousinSum
      }
    })
  })
  return root
}

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const root = new TreeNode(
  5,
  new TreeNode(
    4,
    new TreeNode(1),
    new TreeNode(10)
  ),
  new TreeNode(
    9,
    null,
    new TreeNode(7)
  )
)

console.log(replaceValueInTree(root))
