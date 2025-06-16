class Graph {
  constructor(edges) {
    this._init(edges)
  }

  get(value) {
    return this.edgeMap.get(value)
  }

  _init(edges) {
    const edgeMap = new Map()
    edges.forEach(([from, to]) => {
      const fromSet = edgeMap.get(from) ?? new Set()
      const toSet = edgeMap.get(to) ?? new Set()
      fromSet.add(to)
      toSet.add(from)
      edgeMap.set(from, fromSet)
      edgeMap.set(to, toSet)
    })
    this.edgeMap = edgeMap
  }
}

function dfs(graph, start, bobAt, amounts) {
  const stack = []
  const walked = new Set()
  const parentMap = new Map()
  const leaves = []
  stack.push(start)
  walked.add(start)
  let bobSet = null
  let bobValues = []
  let sharedValue = null
  const getBobValues = startValue => {
    let value = startValue
    const values = []
    while (typeof value !== 'undefined') {
      values.push(value)
      value = parentMap.get(value)
    }
    const half = Math.ceil(values.length / 2)
    bobValues = values.slice(0, half)
    if (values.length % 2 !== 0) {
      sharedValue = bobValues[bobValues.length - 1]
    }
    bobSet = new Set(bobValues)
  }
  while (stack.length > 0) {
    const value = stack.pop()
    walked.add(value)
    if (value === bobAt) {
      getBobValues(value)
    }
    const childValues = graph.get(value)
    let isLeaf = false
    for (const childValue of childValues) {
      if (!walked.has(childValue)) {
        parentMap.set(childValue, value)
        stack.push(childValue)
        isLeaf = true
      }
    }
    if (!isLeaf) {
      leaves.push(value)
    }
  }
  let maxAmount = -Infinity
  for (const leaf of leaves) {
    let amount = 0
    let value = leaf
    while (typeof value !== 'undefined') {
      if (value === sharedValue) {
        amount += amounts[value] / 2
      }
      else if (!bobSet.has(value)) {
        amount += amounts[value]
      }
      value = parentMap.get(value)
    }
    if (amount > maxAmount) {
      maxAmount = amount
    }
  }
  return maxAmount
}

function mostProfitablePath(edges, bobAt, amounts) {
  const graph = new Graph(edges)
  return dfs(graph, 0, bobAt, amounts)
}

console.log(mostProfitablePath(
  [[0,1]],
  1,
  [-7280,2350]
))
