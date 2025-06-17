function divisorSubstrings(num, k) {
  const str = String(num)
  const chars = []
  let count = 0
  for (let i = 0; i < str.length; i++) {
    chars.push(str[i])
    if (i >= k) {
      chars.shift()
    }
    if (i >= k - 1 && num % parseInt(chars.join(''), 10) === 0) {
      count++
    }
  }
  return count
}
