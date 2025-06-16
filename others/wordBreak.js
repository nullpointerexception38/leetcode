function wordBreak(s, wordDict) {
  const dict = new Set(wordDict)
  const dp = { '': true }
  return (function calculate(str) {
    if (typeof dp[str] !== 'undefined') {
      return dp[str]
    }
    for (let i = 0; i < str.length; i++) {
      const first = str.slice(0, i)
      const second = str.slice(i)
      if (calculate(first) && dict.has(second)) {
        dp[str] = true
        return true
      }
    }
    dp[str] = false
    return false
  })(s)
}

console.log(wordBreak('aaaaaa', ['aa', 'a']))
