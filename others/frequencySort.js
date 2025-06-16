function frequencySort(str) {
  const strs = []
  const frequencyMap = new Map()
  for (const c of str) {
    const index = frequencyMap.get(c)
    if (typeof index === 'undefined') {
      const str = c
      strs.push(str)
      frequencyMap.set(c, strs.length - 1)
    } else {
      const str = strs[index]
      strs[index] = str + c
    }
  }
  return strs.sort((a, b) => b.length - a.length).join('')
}

console.log(frequencySort(
  'ccccccbba'
))
