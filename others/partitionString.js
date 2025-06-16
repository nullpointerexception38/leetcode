function partitionString(s) {
  const used = new Map()
  let count = 0
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (used.has(char)) {
      count++
      used.clear()
    }
    used.set(char)
  }
  return count + 1
}
