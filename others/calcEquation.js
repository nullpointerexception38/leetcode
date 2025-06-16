console.log(calcEquation(
  [["a","b"],["b","c"],["a","c"]],
  [2.0,3.0,6.0],
  [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
))

function calcEquation(equations, values, queries) {
  const adj = {}
  const valueMap = {}
  for (let i = 0; i < equations.length; i++) {
    const [u, v] = equations[i]
    const vs = adj[u] ?? []
    vs.push(v)
    adj[u] = vs
    const us = adj[v] ?? []
    us.push(u)
    adj[v] = us
    const value = values[i]
    valueMap[u + ':' + v] = value
    valueMap[v + ':' + u] = 1 / value
  }
  console.log(valueMap)
  for (const key of Object.keys(adj)) {
    const used = new Set()
    ;(function dfs(current, value) {
      valueMap[key + ':' + current] = value
      if (typeof adj[current] === 'undefined') {
        return
      }
      used.add(current)
      for (const to of adj[current]) {
        if (!used.has(to)) {
          const existedValue = valueMap[current + ':' + to] ?? 1
          dfs(to, existedValue * value)
        }
      }
    })(key, 1)
  }
  const answers = []
  for (const [u, v] of queries) {
    if (u === v) {
      answers.push(u in adj ? 1 : -1)
    }
    else {
      answers.push(valueMap[u + ':' + v] ?? -1)
    }
  }
  return answers
}
