function minReorder(n, _connections) {
  const connected = Array(n)
  connected[0] = 1
  let connections = _connections
  let count = 0
  while (connections.length > 0) {
    const nextConnections = []
    for (const connection of connections) {
      const [from, to] = connection
      if (connected[from]) {
        connected[to] = 1
        count++
      }
      else if (connected[to]) {
        connected[from] = 1
      }
      else {
        nextConnections.push(connection)
      }
    }
    if (connections.length - nextConnections.length < 2) {
      nextConnections.reverse()
    }
    connections = nextConnections
  }
  return count
}
