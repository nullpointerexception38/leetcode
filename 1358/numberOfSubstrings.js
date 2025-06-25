function numberOfSubstrings(s) {
  let a = -1
  let b = -1
  let c = -1
  let count = 0
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (char === 'a') {
      a = i
    }
    if (char === 'b') {
      b = i
    }
    if (char === 'c') {
      c = i
    }
    count += Math.min(a, b, c) + 1
  }
  return count
}
