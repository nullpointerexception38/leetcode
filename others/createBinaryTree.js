function createBinaryTree(descriptions) {
  const parentMap = new Map()
  const nodeMap = new Map()
  const nodes = []
  const getNode = value => {
    const node = nodeMap.get(value)
    if (node) {
      return node
    }
    const newNode = new TreeNode(value)
    nodeMap.set(value, newNode)
    nodes.push(newNode)
    return newNode
  }
  for (const description of descriptions) {
    const [parentValue, childValue, isLeft] = description
    const parent = getNode(parentValue)
    const child = getNode(childValue)
    parentMap.set(child, parent)
    if (isLeft) {
      parent.left = child
    } else {
      parent.right = child
    }
  }
  return nodes.find(node => typeof parentMap.get(node) === 'undefined')
}

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

console.log(createBinaryTree(
  [[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]]
))
