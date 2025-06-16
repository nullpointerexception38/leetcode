function maxVowels(s, k) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
  const isVowel = char => vowels.has(char)
  let sum = 0
  for (let i = 0; i < k; i++) {
    if (isVowel(s[i])) {
      sum++
    }
  }
  let maxSum = sum
  for (let i = 1; i + k <= s.length; i++) {
    if (isVowel(s[i - 1])) {
      sum--
    }
    if (isVowel(s[i + k - 1])) {
      sum++
    }
    maxSum = Math.max(maxSum, sum)
  }
  return maxSum
}
