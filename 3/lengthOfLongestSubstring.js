function lengthOfLongestSubstring(s) {
  const n = s.length
  if (n <= 1) {
    return n
  }
  const map = new Map()
  let i = 0
  let j = 0
  let answer = 0
  for (j = 0; j < n; j++) {
    const char = s[j]
    if (map.has(char)) {
      answer = Math.max(answer, j - i)
      i = Math.max(i, map.get(char) + 1)
    }
    map.set(char, j)
  }
  return Math.max(answer, n - i)
}
