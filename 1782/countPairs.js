function countPairs(n, edges, queries) {
  const degrees = Array.from({ length: n + 1 }).fill(0)
  const edgeCountMap = {}
  for (const [u, v] of edges) {
    degrees[u]++
    degrees[v]++
    const key = u <= v ? `${u}:${v}` : `${v}:${u}`
    edgeCountMap[key] = (edgeCountMap[key] ?? 0) + 1
  }
  const sortedDegrees = degrees.slice(1).sort((a, b) => a - b)
  const res = []
  for (const k of queries) {
    let i = 0
    let j = n - 1
    let count = 0
    while (i < j) {
      if (sortedDegrees[i] + sortedDegrees[j] > k) {
        count += j - i
        j--
      }
      else {
        i++
      }
    }
    for (const key of Object.keys(edgeCountMap)) {
      const [u, v] = key.split(':').map(Number)
      const sum = degrees[u] + degrees[v]
      const edgeCount = edgeCountMap[key]
      if (sum > k && sum - edgeCount <= k) {
        count--
      }
    }
    res.push(count)
  }
  return res
}
