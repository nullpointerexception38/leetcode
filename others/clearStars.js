console.log(clearStars(
  'abc*de*fgh*'
))

function clearStars(s) {
  const n = s.length
  const buckets = Array.from({ length: 26 }, () => [])
  const answer = s.split('')
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (char === '*') {
      answer[i] = ''
      for (let j = 0; j < 26; j++) {
        if (buckets[j].length > 0) {
          answer[buckets[j].pop()] = ''
          break
        }
      }
    }
    else {
      buckets[char.charCodeAt(0) - 97].push(i)
    }
  }
  return answer.join('')
}
