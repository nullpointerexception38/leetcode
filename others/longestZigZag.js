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

const head = createTree([1,null,1,1,1,null,null,1,1,null,1,null,null,null,1])

console.log(longestZigZag(head))

function longestZigZag(root) {
  let maxCount = 0
  ;(function dfs(node, direction, count) {
    maxCount = Math.max(maxCount, count)
    const { left, right } = node
    if (left) {
      dfs(left, 'left', direction === 'left' ? 1 : count + 1)
    }
    if (right) {
      dfs(right, 'right', direction === 'right' ? 1 : count + 1)
    }
  })(root, '', 0)
  return maxCount
}
