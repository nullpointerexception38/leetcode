function mergeAlternately(word1, word2) {
  const n = Math.max(word1.length, word2.length)
  let str = ''
  for (let i = 0; i < n; i++) {
    const char1 = word1[i] ?? ''
    const char2 = word2[i] ?? ''
    str += char1 + char2
  }
  return str
}

console.log(mergeAlternately('abcd', 'pq'))
