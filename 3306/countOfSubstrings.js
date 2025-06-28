function countOfSubstrings(word, k) {
  const vowelSet = new Set(['a', 'e', 'i', 'o', 'u'])
  const isVowel = char => vowelSet.has(char)
  const n = word.length
  const fn = k => {
    const vowelMap = new Map()
    let consonants = 0
    let left = 0
    let count = 0
    for (let i = 0; i < n; i++) {
      const char = word[i]
      if (isVowel(char)) {
        vowelMap.set(char, (vowelMap.get(char) ?? 0) + 1)
      }
      else {
        consonants++
      }
      while (vowelMap.size === 5 && consonants >= k) {
        const dropped = word[left++]
        if (isVowel(dropped)) {
          const vowelCount = vowelMap.get(dropped)
          if (vowelCount === 1) {
            vowelMap.delete(dropped)
          }
          else {
            vowelMap.set(dropped, vowelCount - 1)
          }
        }
        else {
          consonants--
        }
      }
      count += left
    }
    return count
  }
  return fn(k) - fn(k + 1)
}
