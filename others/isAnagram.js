function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false
  }
  const mapS = getCountMap(s)
  const mapT = getCountMap(t)
  for (const [char, count] of mapS) {
    if (mapT.get(char) !== count) {
      return false
    }
  }
  return true
}

function getCountMap(str) {
  const map = new Map()
  for (const char of str) {
    const count = map.get(char) ?? 0
    map.set(char, count + 1)
  }
  return map
}
