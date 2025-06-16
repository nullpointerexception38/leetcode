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

const head = createTree([989,null,10250,98693,-89388,null,null,null,-32127])

console.log(maxLevelSum(head))

function maxLevelSum(root) {
  const nodes = [[root, 1]]
  const levelCount = new Map()
  while (nodes.length > 0) {
    const [{ left, right, val }, level] = nodes.shift()
    levelCount.set(level, (levelCount.get(level) ?? 0) + val)
    if (left) {
      nodes.push([left, level + 1])
    }
    if (right) {
      nodes.push([right, level + 1])
    }
  }
  const items = Array.from(levelCount).sort((a, b) => {
    return a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]
  })
  console.log(items)
  return items[0][0]
}
