function longestCommonSubsequence(text1, text2) {
  const length1 = text1.length
  const length2 = text2.length
  const dp = Array.from({ length : length1 + 1 })
    .map(() => Array.from({ length: length2 + 1 }).fill(0))
  for (let i = 1; i < length1 + 1; i++) {
    for (let j = 1; j < length2 + 1; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[length1][length2]
}
