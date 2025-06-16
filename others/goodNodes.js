class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

const root = new TreeNode(
  -5,
  new TreeNode(
    -1
  ),
  new TreeNode(
    -4,
    new TreeNode(
      -5,
      new TreeNode(-5)
    ),
    new TreeNode(
      0,
      new TreeNode(
        -1,
        null,
        new TreeNode(
          -3,
          null,
          new TreeNode(
            -5,
            null,
            new TreeNode(-4)
          )
        )
      ),
      new TreeNode(2)
    ),
  )
)

goodNodes(root)

function goodNodes(root) {
  let goodNodeCount = 0
  ;(function traverse(node, parentValues) {
    const { left, right } = node
    const value = node.val
    const hasGreaterValue = parentValues.some(parentValue => parentValue > value)
    if (!hasGreaterValue) {
      goodNodeCount++
    }
    const nextParentValues = parentValues.slice()
    nextParentValues.push(value)
    if (left) {
      traverse(left, nextParentValues)
    }
    if (right) {
      traverse(right, nextParentValues)
    }
  })(root, [])
  return goodNodeCount
}
