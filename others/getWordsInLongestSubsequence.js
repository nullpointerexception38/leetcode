console.log(getWordsInLongestSubsequence(
  ["bad","dc","bc","ccd","dd","da","cad","dba","aba"],
  [9,7,1,2,6,8,3,7,2]
))

function getWordsInLongestSubsequence(words, groups) {
  const n = words.length
  const getHammingDistance = (i, j) => {
    const a = words[i]
    const b = words[j]
    let count = 0
    for (let k = 0; k < a.length; k++) {
      if (a[k] !== b[k]) {
        count++
      }
    }
    return count
  }
  const isUnequalAdjacentGroup = (i, j) => {
    if (words[i].length !== words[j].length) {
      return false
    }
    if (groups[i] === groups[j]) {
      return false
    }
    return getHammingDistance(i, j) === 1
  }
  const dp = Array.from({ length: n }).fill(0)
  const pos = Array.from({ length: n }).fill(-1)
  let maxCount = -Infinity
  let maxIndex = Infinity
  for (let i = n - 2; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (isUnequalAdjacentGroup(i, j)) {
        pos[i] = dp[j] + 1 > dp[i] ? j : pos[i]
        dp[i] = Math.max(dp[i], dp[j] + 1)
        if (dp[i] > maxCount) {
          maxCount = dp[i]
          maxIndex = i
        }
      }
    }
  }
  if (maxIndex === Infinity) {
    return words.slice(0, 1)
  }
  const answer = []
  let index = maxIndex
  while (pos[index] !== -1) {
    answer.push(words[index])
    index = pos[index]
    if (pos[index] === -1) {
      answer.push(words[index])
    }
  }
  return answer
}
