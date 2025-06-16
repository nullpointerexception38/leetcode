function reverseOddLevels(root) {
  const height = getHeight(root)
  const arrs = [[root]]
  let nodes = [root]
  for (let i = 1; i < height; i++) {
    const nextNodes = []
    for (const node of nodes) {
      nextNodes.push(node.left)
      nextNodes.push(node.right)
    }
    nodes = nextNodes
    arrs.push(nodes)
  }
  for (let i = 0; i < arrs.length; i++) {
    if (i % 2 !== 0) {
      arrs[i] = arrs[i].reverse()
    }
  }
  for (let i = 1; i < arrs.length; i++) {
    const parents = arrs[i - 1]
    const children = arrs[i]
    for (let j = 0; j < children.length; j++) {
      const parent = parents[Math.floor(j / 2)]
      const node = children[j]
      const isLeft = j % 2 === 0
      if (isLeft) {
        parent.left = node
      } else {
        parent.right = node
      }
    }
  }
  return root
}


function getHeight(node) {
  if (!node) {
    return 0
  }
  const { left, right } = node
  const leftHeight = getHeight(left)
  const rightHeight = getHeight(right)
  if (leftHeight > rightHeight) {
    return leftHeight + 1
  }
  return rightHeight + 1
}

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const root = new TreeNode(
  0,
  new TreeNode(
    1,
    new TreeNode(
      0,
      new TreeNode(1),
      new TreeNode(1)
    ),
    new TreeNode(
      0,
      new TreeNode(1),
      new TreeNode(1)
    )
  ),
  new TreeNode(
    2,
    new TreeNode(
      0,
      new TreeNode(2),
      new TreeNode(2)
    ),
    new TreeNode(
      0,
      new TreeNode(2),
      new TreeNode(2)
    )
  )
)

console.log(require('util').inspect(reverseOddLevels(root), { depth: null }))
