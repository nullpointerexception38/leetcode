function largestCombination(candidates) {
  const countMap = new Map()
  for (const c of candidates) {
    const str = c.toString(2)
    for (let i = 0; i < str.length; i++) {
      const bit = str[str.length - 1 - i]
      if (bit === '1') {
        const count = countMap.get(i) ?? 0
        countMap.set(i, count + 1)
      }
    }
  }
  let max = 0
  countMap.forEach(count => {
    max = count > max ? count : max
  })
  return max
}
