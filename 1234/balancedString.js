console.log(balancedString('WWEQERQWQWWRWWERQWEQ'))

function balancedString(s) {
  const n = s.length
  const quarter = n / 4
  const map = { 'Q': 0, 'W': 0, 'E': 0, 'R': 0 }
  const chars = ['Q', 'W', 'E', 'R']
  for (const char of s) {
    map[char]++
  }
  let left = 0
  let answer = Infinity
  for (let i = 0; i < n; i++) {
    const char = s[i]
    map[char]--
    while (left < n && chars.every(c => map[c] <= quarter)) {
      answer = Math.min(answer, i - left + 1)
      map[s[left++]]++
    }
  }
  return answer
}
