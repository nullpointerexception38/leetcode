function findAndReplacePattern(words, pattern) {
  const targetNumericPattern = getNumericPattern(pattern)
  console.log('targetNumericPattern', pattern, targetNumericPattern)
  const res = []
  for (const word of words) {
    const numericPattern = getNumericPattern(word)
    if (targetNumericPattern === numericPattern) {
      console.log('numericPattern', word, numericPattern)
      res.push(word)
    }
  }
  return res
}

function getCharMap(chars) {
  const map = new Map()
  let count = 0
  for (const c of chars) {
    if (!map.has(c)) {
      map.set(c, count)
      count++
    }
  }
  console.log('wtf', chars, map)
  return map
}

function getNumericPattern(word) {
  let numericPattern = ''
  let type = 0
  let previousChar = ''
  const chars = word.split('')
  const map = getCharMap(chars)
  return chars.map(c => map.get(c)).join('|')
}

console.log(findAndReplacePattern(['abcdefghijkba'], 'qwertyuiopwqa'))
