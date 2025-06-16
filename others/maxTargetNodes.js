function maxTargetNodes(edges1, edges2, k) {
  const dfs = (adj, start, k) => {
    if (k < 0) {
      return 0
    }
    let count = 0
    ;(function _dfs(start, prev, k) {
      count++
      if (k <= 0) {
        return
      }
      for (const j of adj[start]) {
        if (prev !== j) {
          _dfs(j, start, k - 1)
        }
      }
    })(start, -1, k)
    return count
  }
  const getCounts = (edges, k) => {
    const adj = Array.from({ length: edges.length + 1 }, () => [])
    for (const [u, v] of edges) {
      adj[u].push(v)
      adj[v].push(u)
    }
    const counts = []
    for (let i = 0; i < adj.length; i++) {
      counts.push(dfs(adj, i, k))
    }
    return counts
  }
  const counts1 = getCounts(edges1 , k)
  const counts2 = getCounts(edges2, k - 1)
  const maxCount2 = Math.max(...counts2)
  return counts1.map(c => c + maxCount2)
}
