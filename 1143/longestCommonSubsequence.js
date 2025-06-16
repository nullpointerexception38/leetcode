console.log(longestCommonSubsequence('pmjghegzqg', 'rvhfpqraglg'))

function longestCommonSubsequence(text1, text2) {
  if (text1.length < text2.length) {
    [text1, text2] = [text2, text1]
  }
  const n = text2.length
  let dp = Array(n + 1).fill(0)
  for (let i = 1; i <= text1.length; i++) {
    const nextDp = Array(n + 1).fill(0)
    for (let j = 1; j <= n; j++) {
      nextDp[j] = text1[i - 1] === text2[j - 1] ? dp[j - 1] + 1 : Math.max(dp[j], nextDp[j - 1])
    }
    dp = nextDp
  }
  return dp[n]
}
