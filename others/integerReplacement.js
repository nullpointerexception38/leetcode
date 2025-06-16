function integerReplacement(n) {
  const dp = new Map()
  dp.set(0, 0)
  dp.set(1, 0)
  return (function replace(i) {
    if (dp.has(i)) {
      return dp.get(i)
    }
    if (i % 2 === 0) {
      const value = 1 + replace(i / 2)
      dp.set(i, value)
      return value
    }
    return Math.min(integerReplacement(i + 1) + 1, integerReplacement(i - 1) + 1)
  })(n)
}
