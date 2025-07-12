function bagOfTokensScore(tokens, power) {
  tokens.sort((a, b) => a - b)
  let maxScore = 0
  let score = 0
  let i = 0
  let j = tokens.length - 1
  while (i <= j) {
    if (score === 0 || power >= tokens[i]) {
      if (tokens[i] > power) {
        return maxScore
      }
      power -= tokens[i++]
      maxScore = Math.max(maxScore, ++score)
    }
    else {
      power += tokens[j--]
      maxScore = Math.max(maxScore, --score)
    }
  }
  return maxScore
}
