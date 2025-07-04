function findAnagrams(s, p) {
  const map = new Map()
  for (const char of p) {
    map.set(char, (map.get(char) ?? 0) + 1)
  }
  const current = Array.from({ length: 26 }).fill(0)
  const pLength = p.length
  const answer = []
  let size = 0
  let left = 0
  const isAnagram = () => {
    if (size !== map.size) {
      return false
    }
    for (const [char, count] of map) {
      if (current[char.charCodeAt(0) - 97] !== count) {
        return false
      }
    }
    return true
  }
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    const charIndex = char.charCodeAt(0) - 97
    current[charIndex]++
    if (current[charIndex] === 1) {
      size++
    }
    if (i - left + 1 > pLength) {
      const dropped = s[left++]
      const charIndex = dropped.charCodeAt(0) - 97
      current[charIndex]--
      if (current[charIndex] === 0) {
        size--
      }
    }
    if (isAnagram()) {
      answer.push(left)
    }
  }
  return answer
}
