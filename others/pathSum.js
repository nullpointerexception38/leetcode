function pathSum(root, targetSum) {
  if (!root) {
    return []
  }
  const res = []
  ;(function traverse(node, paths, sum) {
    const nextPaths = [...paths, node.val]
    const nextSum = sum + node.val
    const { left, right } = node
    if (left) {
      traverse(left, nextPaths, nextSum)
    }
    if (right) {
      traverse(right, nextPaths, nextSum)
    }
    if (!left && !right && nextSum === targetSum) {
      res.push(nextPaths)
    }
  })(root, [], 0)
  return res
}

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

function createTree(nums) {
  const nodes = nums.map(num => num === null ? null : new TreeNode(num))
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i]
    const left = nodes[2 * i + 1]
    const right = nodes[2 * i + 2]
    console.log({ node, left, right })
    if (left) {
      node.left = left
    }
    if (right) {
      node.right = right
    }
  }
  return nodes[0]
}