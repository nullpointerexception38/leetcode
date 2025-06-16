function insertIntoBST(root, value) {
  const gt = value > root.val
  if (gt && root.right === null) {
    root.right = new TreeNode(value)
  } else if (gt) {
    insertIntoBST(root.right, value)
  } else if (!gt && root.left === null) {
    root.left = new TreeNode(value)
  } else if (!gt) {
    insertIntoBST(root.left, value)
  }
  return root
}

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

const root = createTree(
  [4,2,7,1,3]
)

console.log(insertIntoBST(root, 5))
