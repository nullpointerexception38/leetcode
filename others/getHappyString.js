function getHappyString(n, k) {
  const chars = ['a', 'b', 'c']
  const happyStrs = (function getValidStrs(length) {
    if (length < 1) {
      return []
    }
    if (length === 1) {
      return chars
    }
    const strs = getValidStrs(length - 1)
    const res = []
    for (const str of strs) {
      const lastChar = str.slice(-1)
      for (const char of chars) {
        if (lastChar !== char) {
          res.push(str + char)
        }
      }
    }
    return res
  })(n)
  return happyStrs[k - 1] ?? ''
}
