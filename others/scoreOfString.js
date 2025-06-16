function scoreOfString(s) {
  let sum = 0
  for (let i = 1; i < s.length; i++) {
    const score = Math.abs(s[i - 1].charCodeAt(0) - s[i].charCodeAt(0))
    sum += score
  }
  return sum
}
