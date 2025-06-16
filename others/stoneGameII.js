class TreeNode {
  constructor(value) {
    this.value = value
    this.nodes = []
  }
}

function stoneGameII(piles) {
  const { length } = piles
  function createTree(node, index, x, previousM) {
    const m = Math.max(x, previousM)
    const twoMs = 2 * m
    if (index + twoMs >= length) {
      const value = piles.slice(index, index + twoMs)
        .reduce((sum, num) => sum + num, 0)
      const child = new TreeNode(value)
      node.nodes.push(child)
      return
    }
    for (let i = 1; i <= twoMs; i++) {
      const value = piles.slice(index, index + i)
        .reduce((sum, num) => sum + num, 0)
      const child = new TreeNode(value)
      createTree(child, index + i, i, m)
      node.nodes.push(child)
    }
  }
  const root = new TreeNode(0)
  createTree(root, 0, 1, 1)

  let pathData = []
  function simulate(node, path, depth, oddSum, evenSum) {
    let nextOddSum = oddSum
    let nextEvenSum = evenSum
    if (depth % 2 === 0) {
      nextEvenSum += node.value
    } else {
      nextOddSum += node.value
    }
    const nextPath = path.slice()
    nextPath.push(node.value)
    if (node.nodes.length === 0) {
      pathData.push({ oddSum: nextOddSum, evenSum: nextEvenSum, nextPath })
    } else {
      node.nodes.forEach(child => {
        simulate(child, nextPath, depth + 1, nextOddSum, nextEvenSum)
      })
    }
  }
  simulate(root, [], 0, 0, 0)

  console.log(pathData)

  function sortBy(pathData, depth, isEven) {
    const map = pathData.reduce((m, row) => {
      const num = row.nextPath[depth]
      const arr = m.get(num) ?? []
      arr.push(row)
      m.set(num, arr)
      return m
    }, new Map())
    console.log(map)
  }

  function walk(node, depth, path) {
    const isEven = depth % 2 === 0
    const strategy = sortBy(pathData, depth, isEven)
    process.exit(1)
    const value = strategy.nextPath[depth]
    const target = node.nodes.find(child => child.value === value)
    if (target) {
      pathData = pathData.filter(row => row.nextPath[depth] === value)
      path.push(target.value)
      walk(target, depth + 1, path)
    }
  }
  const res = []
  walk(root, 1, res)
  return res.reduce((sum, num, i) => i % 2 !== 0 ? sum : sum + num, 0)
}

console.log(stoneGameII(
  [2, 5, 3, 8, 2]
))
