function addSpaces(s, spaces) {
  const res = []
  let j = 0
  for (let i = 0; i < s.length; i++) {
    if (i === spaces[j]) {
      res.push(' ' + s[i])
      j++
    }
    else {
      res.push(s[i])
    }
  }
  return res.join('')
}
