function reverseWords(s) {
  const words = []
  let temp = ''
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (char === ' ' && temp !== '') {
      words.unshift(temp)
      temp = ''
    }
    else if (char !== ' ') {
      temp += char
    }
  }
  if (temp !== '') {
    words.unshift(temp)
  }
  return words.join(' ')
}
