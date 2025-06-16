function sortVowels(s) {
  const indexes = []
  const chars = s.split('')
  const vowels = chars.reduce((arr, c, i) => {
    if (/^[aeiou]$/i.test(c)) {
      indexes.push(i)
      arr.push({ c, charCode: c.charCodeAt(0) })
    }
    return arr
  }, []).sort((a, b) => a.charCode - b.charCode)
  indexes.forEach((index, i) => chars[index] = vowels[i].c)
  return chars.join('')
}
