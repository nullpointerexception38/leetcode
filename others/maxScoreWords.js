function maxScoreWords(words, letters, scores) {
  const remain = Array.from({ length: 26 }).fill(0)
  for (const char of letters) {
    remain[char.charCodeAt(0) - 97]++
  }
  const scoreMap = []
  const letterMap = []
  for (let i = 0; i < words.length; i++) {
    let score = 0
    const arr = Array.from({ length: 26 }).fill(0)
    for (const char of words[i]) {
      score += scores[char.charCodeAt(0) - 97]
      arr[char.charCodeAt(0) - 97]++
    }
    scoreMap[i] = score
    letterMap[i] = arr
  }
  const take = (letters, remain) => {
    for (let i = 0; i < letters.length; i++) {
      remain[i] -= letters[i]
    }
  }
  const recover = (letters, remain) => {
    for (let i = 0; i < letters.length; i++) {
      remain[i] += letters[i]
    }
  }
  let maxScore = 0
  const blocked = Array.from({ length: words.length }).fill(0)
  ;(function walk(remain, sum) {
    let touched = false
    for (let i = 0; i < words.length; i++) {
      if (blocked[i] === 1) {
        continue
      }
      const word = words[i]
      const letters = letterMap[i]
      const canTake = letters.every((count, _i) => remain[_i] >= count)
      if (!canTake) {
        continue
      }
      touched = true
      take(letters, remain)
      blocked[i] = 1
      walk(remain, sum + scoreMap[i])
      recover(letters, remain)
      blocked[i] = 0
    }
    if (!touched) {
      maxScore = Math.max(maxScore, sum)
    }
  })(remain, 0, [])
  return maxScore
}
