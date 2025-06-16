class BSTIterator {
  constructor(root) {
    this.initInOrderValues(root)
  }

  next() {
    const value = this.values[this.index]
    this.index++
    return value
  }

  hasNext() {
    return typeof this.values[this.index] !== 'undefined'
  }

  initInOrderValues(root) {
    const values = []
    ;(function traverse(node) {
      const { left, right } = node
      if (left) {
        traverse(left)
      }
      console.log(node.val)
      values.push(node.val)
      if (right) {
        traverse(right)
      }
    })(root)
    this.values = values
    this.index = 0
  }
}

const root = createTree([7, 3, 15, null, null, 9, 20])

traverse(root)

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

function createTree(nums) {
  let index = 0
  let root = null
  let prevNodes = []
  const power = Math.floor(Math.log2(nums.length))
  for (let i = 0; i <= power; i++) {
    let nodes = []
    for (let j = 0; j < Math.pow(2, i); j++) {
      nodes.push(new TreeNode(nums[index]))
      index++
      if (index >= nums.length) {
        break
      }
    }
    if (prevNodes.length > 0) {
      for (let j = 0; j < nodes.length; j++) {
        const parent = prevNodes[Math.floor(j / 2)]
        const node = nodes[j]
        if (node.val === null) {
          continue
        }
        if (j % 2 === 0) {
          parent.left = node
        } else {
          parent.right = node
        }
      }
    }
    prevNodes = nodes
    if (i === 0) {
      root = nodes[0]
    }
  }
  return root
}
