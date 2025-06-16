function pathInZigZagTree(label) {
  if (label === 1) {
    return []
  }
  const nodes = [label]
  ;(function walk(num) {
    const power = getPower(num)
    const parentPower = power - 1
    const remainder = (() => {
      const childrenCount = Math.pow(2, power)
      if (power % 2 === 0) {
        return Math.floor((num - childrenCount) / 2)
      }
      const count = Math.pow(2, power + 1) - 1
      return Math.floor((count - num) / 2)
    })()
    const parentChildrenCount = Math.pow(2, parentPower)
    let  parent = parentChildrenCount + remainder

    if (parentPower % 2 === 0) {
      nodes.unshift(parent)
    } else {
      parent = parentChildrenCount + (parentChildrenCount - 1 - remainder)
      nodes.unshift(parent)
    }
    if (parent === 1) {
      return parent
    }
    return walk(parent)
  }(label))
  return nodes
}

console.log(pathInZigZagTree(1))

function getPower(x) {
  return Math.floor(Math.log2(x))
}
