function distributeCoins(root) {
  const counter = (() => {
    let count = 0
    return {
      add(times) {
        count += times
      },
      getCount() {
        return count
      }
    }
  })()
  up(root, null, counter)
  down(root, null, counter)
  return counter.getCount()
}

function down(node, parent, counter) {
  const { left, right } = node
  if (node.val > 1) {
    const diff = node.val - 1
    counter.add(diff)
    node.val -= diff
    if (left) {
      const leftCapacity = getCapacity(left)
      const leftCount = getCount(left)
      if (leftCount < leftCapacity) {
        left.val += (leftCapacity - leftCount)
      }
      down(left, node, counter)
    }
    if (right) {
      const rightCapacity = getCapacity(right)
      const rightCount = getCount(right)
      if (rightCount < rightCapacity) {
        right.val += (rightCapacity - rightCount)
      }
      down(right, node, counter)
    }
  } else {
    if (left) {
      down(left, node, counter)
    }
    if (right) {
      down(right, node, counter)
    }
  }
}

function up(node, parent, counter) {
  const { left, right } = node
  const capacity = getCapacity(node)
  const count = getCount(node)
  if (count > capacity) {
    const diff = count - capacity
    counter.add(diff)
    node.val -= diff
    parent.val += diff
  }
  if (left) {
    up(left, node, counter)
  }
  if (right) {
    up(right, node, counter)
  }
}

function getCapacity(node) {
  const { left, right } = node
  const leftCapacity = left ? getCapacity(left) : 0
  const rightCapacity = right ? getCapacity(right) : 0
  return 1 + leftCapacity + rightCapacity
}

function getCount(node) {
  const { left, right } = node
  const leftCount = left ? getCount(left) : 0
  const rightCount = right ? getCount(right) : 0
  return node.val + leftCount + rightCount
}

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/*
const root = new TreeNode(
  0,
  new TreeNode(0),
  new TreeNode(
    0,
    new TreeNode(
      4,
      new TreeNode(
        3,
        null,
        new TreeNode(0)
      )
    ),
    new TreeNode(0)
  )
)*/

const root = new TreeNode(
  3,
  new TreeNode(0),
  new TreeNode(0)
)

console.log(distributeCoins(root))
