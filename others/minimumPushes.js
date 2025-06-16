function minimumPushes(word) {
  const chars = word.split('')
  const frequencyMap = getFrequencyMap(chars)
  const btnLength = 8
  const charMap = Array.from(frequencyMap.keys())
    .sort((a, b) => frequencyMap.get(b) - frequencyMap.get(a))
    .reduce((obj, char, i) => {
      const count = Math.floor(i / btnLength)
      obj[char] = count + 1
      return obj
    }, {})
  return Array.from(frequencyMap.keys()).reduce((sum, c) => {
    return sum + charMap[c] * frequencyMap.get(c)
  }, 0)
}

function getFrequencyMap(chars) {
  return chars.reduce((map, c) => {
    const count = map.get(c) ?? 0
    map.set(c, count + 1)
    return map
  }, new Map())
}
