function minReorder(n, connections) {
  const adj = Array.from({ length: n }, () => new Set())
  const _adj = Array.from({ length: n }, () => [])
  for (const [u, v] of connections) {
    adj[u].add(v)
    _adj[u].push(v)
    _adj[v].push(u)
  }
  const visited = new Set()
  let count = 0
  ;(function dfs(i) {
    visited.add(i)
    for (const city of _adj[i]) {
      if (!visited.has(city)) {
        if (adj[i].has(city)) {
          count++
        }
        dfs(city)
      }
    }
  })(0)
  return count
}
