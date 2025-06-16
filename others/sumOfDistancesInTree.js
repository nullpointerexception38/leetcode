console.log(sumOfDistancesInTree(
  6,
  [[0,1],[0,2],[2,3],[2,4],[2,5]]
))

function sumOfDistancesInTree(n, edges) {
  const map = Array.from({ length: n }, () => [])
  for (const [from, to] of edges) {
    const fromNodes = map[from]
    const toNodes = map[to]
    fromNodes.push(to)
    toNodes.push(from)
    map[from] = fromNodes
    map[to] = toNodes
  }

  let sum = 0
  const sizeMap = Array.from({ length: n }).fill(1)
  ;(function walk(value, prev, depth) {
    sum += depth
    let size = 1
    map[value].forEach(child => {
      if (child !== prev) {
        size += walk(child, value, depth + 1)
      }
    })
    sizeMap[value] = size
    return size
  })(0, -1, 0)

  const answer = Array.from({ length: n })
  answer[0] = sum
  ;(function walk(value, parent) {
    if (typeof parent !== 'undefined') {
      answer[value] = answer[parent] + (n - 2 * sizeMap[value])
    }
    map[value].forEach(child => {
      if (child !== parent) {
        walk(child, value)
      }
    })
  })(0)
  return answer
}
