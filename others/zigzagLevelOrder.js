const root = createTree([1, 2, 3, 4, 5, 6, 7])

console.log(zigzagLevelOrder(root))

function zigzagLevelOrder(root) {
  if (!root) {
    return null
  }
  const nodes = [[root, 0]]
  const map = new Map()
  while (nodes.length > 0) {
    const [node, depth] = nodes.shift()
    const depthNodes = map.get(depth) ?? []
    depthNodes.push(node)
    map.set(depth, depthNodes)
    const { left, right } = node
    if (left) {
      nodes.push([left, depth + 1])
    }
    if (right) {
      nodes.push([right, depth + 1])
    }
  }
  const res = []
  for (const [depth, nodes] of map) {
    if (depth % 2 === 0) {
      res.push(nodes.map(node => node.val))
    } else {
      res.push(nodes.reverse().map(node => node.val))
    }
  }
  return res
}

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

function createTree(nums) {
  if (nums.length === 0) {
    return null
  }
  const root = new TreeNode(nums[0])
  const nodes = [root]
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i]
    const node = new TreeNode(num)
    nodes[i] = node
    const parentIndex = Math.ceil(i / 2) - 1
    const parent = nodes[parentIndex]
    const isEven = i % 2 === 0
    if (isEven) {
      parent.right = node
    } else {
      parent.left = node
    }
  }
  return root
}
