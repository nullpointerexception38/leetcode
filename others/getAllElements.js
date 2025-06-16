function getAllElements(tree1, tree2) {
  const nums = []
  const getValues = node => {
    if (!node) {
      return
    }
    nums.push(node.val)
    const { left, right } = node
    if (left) {
      getValues(left)
    }
    if (right) {
      getValues(right)
    }
  }
  getValues(tree1)
  getValues(tree2)
  return nums.sort((a, b) => a - b)
}
