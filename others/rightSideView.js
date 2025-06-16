class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function createTree(nums) {
  if (nums.length === 0) {
    return null
  }
  const _nums = nums.slice()
  const root = new TreeNode(_nums.shift())
  const nodes = [root]
  let i = 0
  while (_nums.length > 0) {
    const node = nodes[i]
    if (node === null) {
      i++
      continue
    }
    let value = _nums.shift()
    node.left = value !== null ? new TreeNode(value) : null
    nodes.push(node.left)
    value = _nums.shift()
    node.right = value !== null ? new TreeNode(value) : null
    nodes.push(node.right)
    i++
  }
  return root
}

const head = createTree([1,2,3,null,5,null,4])

console.log(rightSideView(head))

function rightSideView(root) {
  if (!root) {
    return []
  }
  const nodes = [[root, 0]]
  const values = []
  let i = 0
  let currentDepth = -1
  while (nodes.length > 0) {
    const [node, depth] = nodes.shift()
    const { left, right } = node
    if (currentDepth !== depth) {
      values.push(node.val)
    }
    currentDepth = depth
    if (right) {
      nodes.push([right, depth + 1])
    }
    if (left) {
      nodes.push([left, depth + 1])
    }
  }
  return values
}
