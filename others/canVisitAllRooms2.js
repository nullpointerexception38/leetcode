console.log(canVisitAllRooms([[1],[2],[],[3]]))

function canVisitAllRooms(rooms) {
  const visited = Array.from({ length: rooms.length })
  ;(function dfs(current, prev) {
    visited[current] = 1
    return rooms[current].some(key => visited[key] !== 1 && dfs(key, current))
  })(0, -1)
  console.log(visited)
  return visited.every(room => room === 1)
}
