function countVowels(word) {
  const { length } = word
  const isVowel = char => 'aeiou'.includes(char)
  let sum = 0
  for (let i = 1; i <= length; i++) {
    sum += isVowel(word[i - 1]) ? i : 1
  }
  return sum
}

console.log(countVowels('ab'))
