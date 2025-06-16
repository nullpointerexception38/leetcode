const root = createTree([1, 2, 3, null, 4])

function countPairs(root, distance) {
  const leaves = []
  ;(function walk(node, depth, parents) {
    const { left, right } = node
    if (left) {
      walk(left, depth + 1, [{ node, depth }, ...parents])
    }
    if (right) {
      walk(right, depth + 1, [{ node, depth }, ...parents])
    }
    if (!left && !right) {
      leaves.push({ node, depth, parents })
    }
  })(root, 0, [])
  let count = 0
  for (let i = 0; i < leaves.length - 1; i++) {
    for (let j = i + 1; j < leaves.length; j++) {
      const a = leaves[i]
      const b = leaves[j]
      const abDistance = getDistance(a, b, distance)
      if (abDistance !== -1 && abDistance <= distance) {
        count++
      }
    }
  }
  return count
}

function getDistance(first, second, distance) {
  const [a, b] = first.depth < second.depth ? [first, second] : [second, first]
  let times = 0
  for (const aParent of a.parents) {
    if (++times > distance) {
      return -1
    }
    for (const bParent of b.parents) {
      if (aParent.node === bParent.node) {
        return a.depth + b.depth - aParent.depth - bParent.depth
      }
    }
  }
  return -1
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
    if (num === null) {
      continue
    }
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
