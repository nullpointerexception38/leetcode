function restoreArray(adjacentPairs) {
  const size = adjacentPairs.length
  const m = new Map()
  for (let i = 0; i < size; i++) {
    const [start, end] = adjacentPairs[i]
    if (!m.has(start)) {
      m.set(start, [])
    }
    if (!m.has(end)) {
      m.set(end, [])
    }
    m.get(start).push(end)
    m.get(end).push(start)
  }
  const res = []
  const entries = Array.from(m)
  for (const [num, arr] of entries) {
    if (arr.length === 1) {
      res.push(num)
      res.push(arr[0])
      break
    }
  }
  for (let i = 2; i < size + 1; i++) {
    const prev = res[i - 2]
    const arr = m.get(res[i - 1])
    const num = prev === arr[0] ? arr[1] : arr[0]
    res.push(num)
  }
  return res
}
