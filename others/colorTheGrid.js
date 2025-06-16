function colorTheGrid(m, n) {
  const patterns = createPatterns(m)
  const length = patterns.length
  const mod = 1e9 + 7
  const compatible = Array.from({ length }, () => [])
  let dp = Array.from({ length }).fill(1)
  for (let i = 0; i < length; i++) {
    const indexes = compatible[i]
    for (let j = 0; j < length; j++) {
      if (overlapped(patterns[i], patterns[j], m)) {
        indexes.push(j)
      }
    }
  }
  for (let i = 1; i < n; i++) {
    const nextDp = Array.from({ length }).fill(0)
    for (let j = 0; j < length; j++) {
      const prevMask = patterns[j]
      const prevCount = dp[j]
      for (const k of compatible[j]) {
        nextDp[k] = (nextDp[k] + prevCount) % mod
      }
    }
    dp = nextDp
  }
  return Array.from(dp.values()).reduce((sum, num) => (sum + num) % mod, 0)
}

function overlapped(p1, p2, m) {
  for (let i = 0; i < m; i++) {
    const c1 = (p1 >> (2 * i)) & 3
    const c2 = (p2 >> (2 * i)) & 3
    if (c1 === c2) {
      return false
    }
  }
  return true
}

function createPatterns(m) {
  const masks = []
  ;(function dfs(mask, prev, length) {
    if (length === m) {
      masks.push(mask)
      return
    }
    for (let i = 0; i < 3; i++) {
      if (prev !== i) {
        dfs((mask << 2) + i, i, length + 1)
      }
    }
  })(0, -1, 0)
  return masks
}
