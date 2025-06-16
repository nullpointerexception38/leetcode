class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

//console.log(sortedArrayToBST([-10,-3,0,5,9]))
console.log(require('util').inspect(sortedArrayToBST([1,2,3,4,5]),{ depth: null }))

function sortedArrayToBST(nums) {
  return (function walk(start, end) {
    if (start > end) {
      return null
    }
    const n = end - start
    const mid = start + Math.floor(n / 2)
    const value = nums[mid]
    const center = new TreeNode(value)
    center.left = walk(start, mid - 1)
    center.right = walk(mid + 1, end)
    return center
  })(0, nums.length - 1)
}
