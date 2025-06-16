function findCircleNum(isConnected) {
  const visited = new Set()
  let count = 0
  for (let i = 0; i < isConnected.length; i++) {
    if (visited.has(i)) {
      continue
    }
    ;(function dfs(current) {
      if (visited.has(current)) {
        return
      }
      visited.add(current)
      const cities = isConnected[current]
      for (let i = 0; i < cities.length; i++) {
        if (cities[i] === 1 && !visited.has(i)) {
          dfs(i)
        }
      }
    })(i)
    count++
  }
  return count
}

console.log(findCircleNum([[1,0,0],[0,1,0],[0,0,1]]))
