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
    node.left = value ? new TreeNode(value) : null
    nodes.push(node.left)
    value = _nums.shift()
    node.right = value ? new TreeNode(value) : null
    nodes.push(node.right)
    i++
  }
  return root
}

const root1 = createTree([3,5,1,6,2,9,8,null,null,7,4])
const root2 = createTree([3,5,1,6,7,4,2,null,null,null,null,null,null,9,11,null,null,8,10])

console.log(leafSimilar(root1, root2))

function leafSimilar(root1, root2) {
  const getLeaves = node => {
    const leaves = []
    ;(function dfs(node) {
      const { left, right } = node
      if (!left && !right) {
        leaves.push(node.val)
      }
      if (left) {
        dfs(left)
      }
      if (right) {
        dfs(right)
      }
    })(node)
    return leaves
  }
  const root1Leaves = getLeaves(root1)
  const root2Leaves = getLeaves(root2)
  return root1Leaves.length === root2Leaves.length && root1Leaves.every((num, i) => num === root2Leaves[i])
}
