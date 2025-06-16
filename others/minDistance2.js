console.log(minDistance('eat', 'sea'))

function minDistance(word1, word2) {
  const length1 = word1.length
  const length2 = word2.length
  const dp = Array.from({ length: length1 + 1 })
    .map(() => Array.from({ length: length2 + 1 }).fill(0))
  for (let i = 0; i <= length1; i++) {
    for (let j = 0; j <= length2; j++) {
      const char1 = word1[i - 1] ?? ''
      const char2 = word2[j - 1] ?? ''
      if (char1 === '') {
        dp[i][j] = j
      }
      else if (char2 === '') {
        dp[i][j] = i
      }
      else if (char1 === char2) {
        dp[i][j] = dp[i - 1][j - 1]
      }
      else {
        dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j]) + 1
      }
    }
  }
  return dp[length1][length2]
}
