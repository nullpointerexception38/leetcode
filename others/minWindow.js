function minWindow(s, t) {
  const charMap = new Map()
  const setMap = (map, c) => {
    const count = map.get(c) ?? 0
    map.set(c, count + 1)
  }
  const eq = (m1, m2) => {
    for (const [k, v] of m1) {
      const value = m2.get(k)
      if (typeof value === 'undefined' || value < v) {
        return false
      }
    }
    return true
  }
  for (const c of t) {
    setMap(charMap, c)
  }
  const { length } = s
  const map = new Map()
  let i = 0
  let j = 0
  let answer = ''
  let found = false
  let prevJ = -1
  while (i < length && j < length) {
    const char = s[j]
    if (j !== prevJ) {
      setMap(map, char)
      prevJ = j
    }
    if (eq(charMap, map)) {
      const matched = s.slice(i, j + 1)
      if (answer === '' || matched.length < answer.length) {
        answer = matched
      }
      found = true
    }
    if (found) {
      const c = s[i]
      const count = map.get(c)
      map.set(c, count - 1)
      i++
      found = false
    }
    else {
      j++
    }
  }
  return answer
}

console.log(minWindow('XABXCXXABC', 'ABC'))
