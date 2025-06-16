function isSubsequence(s, t) {
  const set = new Set(s.split(''))
  let str = ''
  for (const c of t) {
    if (set.has(c)) {
      str += c
    }
  }
  let i = 0
  for (const c of str) {
    if (c === s[i]) {
      i++
    }
  }
  return i === s.length
}
