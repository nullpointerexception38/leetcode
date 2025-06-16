const root = createTree([1, 2, 3, 4, 5, 6, 7])

console.log(levelOrder(root))

function levelOrder(root) {
  const res = []
  if (!root) {
    return res
  }
  let nodes = [root]
  while (nodes.length > 0) {
    const children = nodes.reduce((arr, node) => {
      const { left, right } = node
      if (left) {
        arr.push(left)
      }
      if (right) {
        arr.push(right)
      }
      return arr
    }, [])
    const values = nodes.map(node => node.val)
    res.push(values)
    nodes = children
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
