function xorQueries(nums, queries) {
  const sortedQueries = queries.slice().sort(([aStart, aEnd], [bStart, bEnd]) => {
    if (aStart === bStart) {
      return aEnd - bEnd
    }
    return aStart - bStart
  })
  const cache = {}
  const startCache = {}
  sortedQueries.forEach(([start, end]) => {
    const cacheKey = `${start}:${end}`
    if (typeof cache[cacheKey] !== 'undefined') {
      return cache[cacheKey]
    }
    let startAt = start
    let res = 0
    const currentStartCache = startCache[start]
    if (typeof startCache[start] !== 'undefined') {
      startAt = startCache[start].end + 1
      res = startCache[start].res
    }
    for (let i = startAt; i <= end; i++) {
      res ^= nums[i]
    }
    cache[cacheKey] = res
    startCache[start] = { end, res }
  })
  return queries.map(([start, end]) => cache[`${start}:${end}`])
}

console.log(xorQueries(
  [1,3,4,8],
  [[0,1],[1,2],[0,3],[3,3]]
))
