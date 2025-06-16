class FindElements {
  constructor(root) {
    this.recover(root)
    this.root = root
  }

  recover(node, parent) {
    if (!parent) {
      node.val = 0
    }
    const { left, right } = node
    if (left) {
      left.val = 2 * node.val + 1
      this.recover(left, node)
    }
    if (right) {
      right.val = 2 * node.val + 2
      this.recover(right, node)
    }
  }

  find(value) {
    return this._find(this.root, value)
  }

  _find(node, value) {
    if (node.val === value) {
      return true
    }
    const { left, right } = node
    if (left && this._find(left, value)) {
      return true
    }
    if (right && this._find(right, value)) {
      return true
    }
    return false
  }
}

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const root = new TreeNode(-1, null, new TreeNode(-1))

const f = new FindElements(root)

console.log(f.find(1))
console.log(f.find(2))
