function TreeNode(val, left, right) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function serialize(root) {
  if (!root) {
    return ''
  }
  let node = root
  let nodes = [node]
  let str = ''
  let ns = ''
  while (nodes.length > 0) {
    const node = nodes.shift()
    if (node) {
      const { val, left, right } = node
      str += ns + String(val) + ','
      ns = ''
      nodes.push(left || null)
      nodes.push(right || null)
    }
    else {
      ns += 'n,'
    }
  }
  return str.slice(0, str.length - 1)
}

function deserialize(dataStr) {
  let str = ''
  let root = null
  let current = null
  let n = 0
  let leftDone = false
  const { length } = dataStr
  const parentStack = []
  for (let i = 0; i < length; i++) {
    const c = dataStr[i]
    const isLast = i === length - 1
    if (c === ',' || isLast) {
      if (isLast) {
        str += c
      }
      const value = str === 'n' ? null : parseInt(str, 10)
      str = ''
      if (!root && value === null) {
        throw new Error('Unexpected null value.');
      }
      if (!root) {
        const node = new TreeNode(value)
        root = node
        parentStack.push(root)
      }
      else {
        const parent = parentStack[0]
        if (!leftDone) {
          if (value !== null) {
            const node = new TreeNode(value)
            parent.left = node
            parentStack.push(node)
          }
          leftDone = true
        }
        else if (leftDone) {
          if (value !== null) {
            const node = new TreeNode(value)
            parent.right = node
            parentStack.push(node)
          }
          parentStack.shift()
          leftDone = false
        }
      }
      n++
    } else {
      str += c
    }
  }
  return root
}

console.log(serialize(deserialize('')))
