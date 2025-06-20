console.log(longestSemiRepetitiveSubstring('0'))

function longestSemiRepetitiveSubstring(str) {
  let repeatedAt = -1
  let repeated = ''
  let left = 0
  let max = 1
  for (let i = 1; i < str.length; i++) {
    const char = str[i]
    if (char === str[i - 1]) {
      if (repeated) {
        left = repeatedAt + 1
      }
      repeated = char
      repeatedAt = i - 1
    }
    max = Math.max(max, i - left + 1)
  }
  return max
}
