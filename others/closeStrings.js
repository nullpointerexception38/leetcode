function closeStrings(word1, word2) {
  if (word1.length !== word2.length) {
    return false
  }
  const m1 = new Map()
  const m2 = new Map()
  for (let i = 0; i < word1.length; i++) {
    const c1 = word1[i]
    const c2 = word2[i]
    const count1 = m1.get(c1) ?? 0
    const count2 = m2.get(c2) ?? 0
    m1.set(c1, count1 + 1)
    m2.set(c2, count2 + 1)
  }
  for (const [char] of m1) {
    if (!m2.has(char)) {
      return false
    }
  }
  const counts1 = Array.from(m1.values()).sort((a, b) => a - b)
  const counts2 = Array.from(m2.values()).sort((a, b) => a - b)
  return counts1.every((c, i) => c === counts2[i])
}
