function maxTargetNodes(edges1, edges2) {
  const getTargetCount = (edges, colors) => {
    const n = edges.length + 1
    const adj = Array.from({ length: n }, () => [])
    for (const [u, v] of edges) {
      adj[u].push(v)
      adj[v].push(u)
    }
    let count = 0
    ;(function dfs(start, prev, times) {
      if (times % 2 === 0) {
        count++
        colors[start] = -1
      }
      for (const j of adj[start]) {
        if (j !== prev) {
          dfs(j, start, times + 1)
        }
      }
    })(0, -1, 0)
    return [count, n - count]
  }
  const n = edges1.length + 1
  const colors1 = Array(n).fill(0)
  const colors2 = Array(edges2.length + 1).fill(0)
  const [c1, c2] = getTargetCount(edges1, colors1)
  const count2 = Math.max(...getTargetCount(edges2, colors2))
  return colors1.map(color => color === -1 ? c1 + count2 : c2 + count2)
}

console.log(maxTargetNodes(
  [[0,1],[0,2],[2,3],[2,4]],
  [[0,1],[0,2],[0,3],[2,7],[1,4],[4,5],[4,6]]
))
