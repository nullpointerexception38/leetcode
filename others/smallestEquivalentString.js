function smallestEquivalentString(s1, s2, baseStr) {
  const sets = []
  const map = new Map()
  for (let i = 0; i < s1.length; i++) {
    const c1 = s1[i]
    const c2 = s2[i]
    const c1Set = map.get(c1)
    const c2Set = map.get(c2)
    let set
    if (c1Set && c2Set) {
      set = new Set()
      for (const c of c1Set) {
        set.add(c)
      }
      for (const c of c2Set) {
        set.add(c)
      }
      for (const c of set) {
        map.set(c, set)
      }
    }
    else {
      set = c1Set || c2Set
      if (set) {
        set.add(c1)
        set.add(c2)
      } else {
        set = new Set([c1, c2])
        sets.push(set)
      }
      map.set(c1, set)
      map.set(c2, set)
    }
  }
  const firstCharMap = new Map()
  return baseStr.split('').map(c => {
    const firstChar = firstCharMap.get(c)
    if (firstChar) {
      return firstChar
    }
    const set = map.get(c)
    if (set) {
      const firstChar = Array.from(set).sort((a, b) => a.charCodeAt() - b.charCodeAt())[0]
      firstCharMap[c] = firstChar
      return firstChar
    }
    return c
  }).join('')
}

console.log(smallestEquivalentString(
  'gicimlheddadmbmhiimakmhgklliljllfgjegamichefljcdef',
  'jgjbjkhkliegkfdcbfcdgmeadlkgcdfkcjdmmcgliegijgjimj',
  'lqppdcmgachdannbaeztqoqfpimyzcdqksykgwymceogkgruey'
))
