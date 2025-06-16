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

const head = createTree([3,5,1,6,2,0,8,null,null,7,4], 5, 1)

const nodes = [head]
let p
let q
while (nodes.length > 0) {
  const node = nodes.pop()
  const { left, right } = node
  if (node.val === 5) {
    p = node
  }
  if (node.val === 4) {
    q = node
  }
  if (right) {
    nodes.push(right)
  }
  if (left) {
    nodes.push(left)
  }
}

console.log(lowestCommonAncestor(head, p, q))

function lowestCommonAncestor(root, p, q) {
  if (!root) {
    return null
  }
  if (root.val === p.val || root.val === q.val) {
    return root
  }
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)
  if (left === null) {
    return right
  }
  if (right === null) {
    return left
  }
  return root
}
