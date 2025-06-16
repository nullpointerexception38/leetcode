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

const root = createTree([3, 4, 5, 1, 2]);

const subRoot = createTree([4, 1, 2])

console.log(isSubtree(root, subRoot))

function isSubtree(root, subRoot) {
  const subRootValue = subRoot.val
  const subRootPattern = getNodePattern(subRoot)
  let is = false
  ;(function traverse(node) {
    const { left, right, val } = node
    if (val === subRootValue && getNodePattern(node) === subRootPattern) {
      is = true
    }
    if (left) {
      traverse(left)
    }
    if (right) {
      traverse(right)
    }
  })(root)
  return is
}

function getNodePattern(node) {
  const arr = []
  const values = [node]
  while (values.length > 0) {
    const target = values.shift()
    if (target === null) {
      arr.push(null)
    }
    else {
      const { left, right } = target
      arr.push(target.val)
      values.push(left ?? null)
      values.push(right ?? null)
    }
  }
  return arr.toString();
}
