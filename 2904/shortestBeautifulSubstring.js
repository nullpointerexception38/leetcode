function shortestBeautifulSubstring(s, k) {
  let left = 0
  let count = 0
  let answer = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1') {
      count++
    }
    while (count > k) {
      if (s[left++] === '1') {
        count--
      }
    }
    while (count === k && s[left] === '0') {
      left++
    }
    if (count === k) {
      const str = s.substr(left, i - left + 1)
      const strLen = str.length
      const answerLen = answer.length
      if (answer === '' || strLen < answerLen || (strLen === answerLen && str < answer)) {
        answer = str
      }
    }
  }
  return answer
}
