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

const head = createTree([-1,5,-2,4,4,2,-2,null,null,-4,null,-2,3,null,-2,0,null,-1,null,-3,null,-4,-3,3,null,null,null,null,null,null,null,3,-3])

console.log(goodNodes(head))

function goodNodes(root) {
  let count = 0
  ;(function dfs(node, max) {
    if (node.val >= max) {
      count++
    }
    const { left, right } = node
    if (left) {
      dfs(left, Math.max(node.val, max))
    }
    if (right) {
      dfs(right, Math.max(node.val, max))
    }
  })(root, -Infinity)
  return count
}
