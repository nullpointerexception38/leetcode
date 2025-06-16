function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

//console.log(buildTree([1,2,3], [2,1,3]))
//console.log(buildTree([1,2,3], [3,2,1]))
//console.log(buildTree([1,2,3], [2,3,1]))
//console.log(buildTree([1,2,3], [1,3,2]))
console.log(buildTree([1, 2, 3, 4, 5], [2, 4, 1, 5, 3]))

function buildTree(preorder, inorder) {
  const getPreorder = (preorder, inorder) => {
    const set = new Set(inorder)
    return preorder.filter(p => set.has(p))
  }
  return (function build(preorder, inorder) {
    if (preorder.length === 0) {
      return null
    }
    const rootValue = preorder[0]
    const root = new TreeNode(rootValue)
    const rootIndex = inorder.findIndex(value => value === rootValue)

    const leftInorder = inorder.slice(0, rootIndex)
    const leftPreorder = getPreorder(preorder, leftInorder)
    const rightInorder = inorder.slice(rootIndex + 1)
    const rightPreorder = getPreorder(preorder, rightInorder)

    root.left = build(leftPreorder, leftInorder)
    root.right = build(rightPreorder, rightInorder)
    return root
  })(preorder, inorder)
}
