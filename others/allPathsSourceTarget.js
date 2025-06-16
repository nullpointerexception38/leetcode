function allPathsSourceTarget(graph) {
  const res = []
  const end = graph.length - 1
  const scan = (index, rawStack, rawVisited) => {
    const stack = [...rawStack]
    const visited = { ...rawVisited }
    stack.push(index)
    visited[index] = true
    if (index === end) {
      res.push(stack.slice())
      return
    }
    for (const num of graph[index]) {
      if (visited[num]) {
        continue
      }
      scan(num, stack, visited)
    }
  }
  scan(0, [], {})
  return res
}

console.log(allPathsSourceTarget([
  [1, 2],
  [3],
  [3, 4],
  [4],
  [5],
  []
]))
