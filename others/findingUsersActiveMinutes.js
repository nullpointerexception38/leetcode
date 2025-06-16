function findingUsersActiveMinutes(logs, k) {
  const idMap = logs.reduce((map, [id, time]) => {
    const data = map.get(id) || {}
    map.set(id, Object.assign(data, { [time]: true }))
    return map
  }, new Map())
  const uamMap = Array.from(idMap.keys())
    .reduce((map, id) => {
      const uam = Object.keys(idMap.get(id)).length
      const count = map.get(uam) ?? 0
      map.set(uam, count + 1)
      return map
    }, new Map())
  return Array.from({ length: k }).map((_, i) => uamMap.get(i + 1) ?? 0)
}
