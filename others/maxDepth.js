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

/*const head = createTree([3,9,20,null,null,15,7])*/
const head = createTree([1,null,2])

console.log(maxDepth(head))

function maxDepth(root) {
  if (!root) {
    return 0
  }
  let max = 0
  ;(function dfs(node, depth) {
    max = Math.max(max, depth)
    const { left, right } = node
    if (left) {
      dfs(left, depth + 1)
    }
    if (right) {
      dfs(right, depth + 1)
    }
  })(root, 1);
  return max
}
