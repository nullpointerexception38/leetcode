console.log(hasAllCodes('00110110', 2))

function hasAllCodes(s, k) {
  const set = new Set()
  const max = Math.pow(2, k)
  for (let i = 0; i <= s.length - k; i++) {
    const num = parseInt(s.substr(i, k), 2)
    if (num <= max) {
      set.add(num)
    }
    if (set.size === max) {
      return true
    }
  }
  return false
}
