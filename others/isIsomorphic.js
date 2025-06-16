function isIsomorphic(s, t) {
  const m1 = new Map()
  const m2 = new Map()
  for (let i = 0; i < s.length; i++) {
    const c1 = s[i]
    const c2 = t[i]
    if (!m1.has(c1) && !m2.has(c2)) {
      m1.set(c1, c2)
      m2.set(c2, c1)
    }
  }
  let str = ''
  for (let i = 0; i < s.length; i++) {
    str += m1.get(s[i])
  }
  return str === t
}
