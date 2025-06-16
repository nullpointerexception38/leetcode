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

const root = createTree([1,2,3,4,5,null,8,null,null,6,7,9])

console.log(preorderTraversal(root))

function preorderTraversal(root) {
  const answer = []
  const stack = []
  let current = root
  while (current || stack.length > 0) {
    if (current) {
      answer.push(current.val)
      if (current.right) {
        stack.push(current.right)
      }
      current = current.left
    }
    else {
      const node = stack.pop()
      current = node
    }
  }
  return answer
}
