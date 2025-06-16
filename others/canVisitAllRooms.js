function canVisitAllRooms(rooms) {
  const visitedMap = rooms.reduce((obj, _, i) => Object.assign(obj, { [i]: false }), {})
  let keys = rooms[0]
  visitedMap[0] = true
  while (keys.length > 0) {
    const nextKeys = []
    for (const key of keys) {
      if (visitedMap[key] === false) {
        visitedMap[key] = true
        nextKeys.push(...rooms[key].filter(k => visitedMap[k] === false))
      }
    }
    keys = nextKeys
  }
  return Object.keys(visitedMap).every(key => visitedMap[key])
}

console.log(canVisitAllRooms(
  [[1],[2],[3],[]]
))
