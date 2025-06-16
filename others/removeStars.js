function removeStars(s) {
  const chars = s.split('')
  const arr = []
  for (const c of chars) {
    if (c === '*') {
      arr.pop()
    } else {
      arr.push(c)
    }
  }
  return arr.join('')
}
