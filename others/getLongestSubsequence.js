function getLongestSubsequence(words, groups) {
  const n = words.length
  const res = [words[0]]
  for (let i = 1; i < n; i++) {
    const matched = groups[i - 1] !== groups[i]
    if (matched) {
      res.push(words[i])
    }
  }
  return res
}
