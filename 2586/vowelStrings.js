function vowelStrings(words, left ,right) {
  const isVowel = char => ['a', 'e', 'i', 'o', 'u'].includes(char)
  let count = 0
  for (let i = left; i <= right; i++) {
    const word = words[i]
    if (isVowel(word[0]) && isVowel(word[word.length - 1])) {
      count++
    }
  }
  return count
}
