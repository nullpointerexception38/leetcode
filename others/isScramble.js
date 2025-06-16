function isScramble(s1, s2) {
  const is = memoize((s1, s2) => {
    if (s1 === s2) {
      return true
    }
    if (!looseEqual(s1, s2)) {
      return false
    }
    const { length } = s1
    for (let i = 1; i < length; i++) {
      const s1Head = s1.slice(0, i)
      const s1Tail = s1.slice(i)
      const s2Head = s2.slice(0, i)
      const s2Tail = s2.slice(i)

      const s2Head2 = s2.slice(0, length - i)
      const s2Tail2 = s2.slice(length - i)

      // great vs rgtea
      // [gr], [rg]       && [eat], [tea]
      // [a]____, ____[a] && _[reat], [gtea]_
      if (
        is(s1Head, s2Head) && is(s1Tail, s2Tail) ||
        is(s1Head, s2Tail2) && is(s1Tail, s2Head2)
      ) {
        return true
      }
    }
    return false
  })
  return is(s1, s2)
}

function memoize(fn) {
  const cache = new Map()
  return (...args) => {
    const key = args.join(':')
    if (cache.has(key)) {
      return cache.get(key)
    }
    const res = fn(...args)
    cache.set(key, res)
    return res
  }
}

function looseEqual(s1, s2) {
  const { length } = s1
  const m1 = Array.from({ length: 26 }).fill(0)
  const m2 = Array.from({ length: 26 }).fill(0)
  for (let i = 0; i < length; i++) {
    ++m1[s1[i].charCodeAt(0) - 97]
    ++m2[s2[i].charCodeAt(0) - 97]
  }
  return m1.every((count, i) => count === m2[i])
}
