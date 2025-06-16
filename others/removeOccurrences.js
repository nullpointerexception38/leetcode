function removeOccurrences(s, part) {
  const index = s.indexOf(part)
  if (index === -1) {
    return s
  }
  const str = s.slice(0, index) + s.slice(index + part.length)
  return removeOccurrences(str, part)
}
