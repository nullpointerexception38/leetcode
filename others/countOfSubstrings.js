function countOfSubstrings(word, n) {
  const map = new Map()
  const { length } = word
  const isVowel = c => ['a', 'e', 'i', 'o', 'u'].includes(c)
  let count = 0
  for (let i = 5 + n; i <= length; i++) {
    for (let j = 0; j + i <= length; j++) {
      const vowelMap = new Map([['a', false], ['e', false], ['i', false], ['o', false], ['u', false]])
      let consonantCount = 0
      for (let k = j; k < j + i; k++) {
        const c = word[k]
        if (isVowel(c)) {
          vowelMap.set(c, true)
        } else {
          consonantCount++
        }
      }
      const kMatched = n === consonantCount
      const hasAllVowels = Array.from(vowelMap.values()).every(value => value === true)
      if (kMatched && hasAllVowels) {
        count++
      }
    }
  }
  return count
}

console.log(countOfSubstrings('aeiou', 0))
