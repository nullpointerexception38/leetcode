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

const head = createTree([8, 2, 3, 4, 5, null, null, 6])

console.log(pathSum(head, 10))

function pathSum(root, targetSum) {
  if (!root) {
    return 0
  }
  const map = new Map()
  map.set(0, 1)
  let count = 0
  ;(function dfs(node, sum) {
    const { left, right } = node
    const currentSum = sum + node.val
    count += map.get(currentSum - targetSum) ?? 0
    map.set(currentSum, (map.get(currentSum) ?? 0) + 1)
    if (left) {
      dfs(left, currentSum)
    }
    if (right) {
      dfs(right, currentSum)
    }
    map.set(currentSum, (map.get(currentSum) ?? 0) - 1)
  })(root, 0)
  return count
}
