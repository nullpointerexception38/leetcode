console.log(getLongestSubsequence(
  ["d","a","v","b"],
  [1,0,0,1]
))

console.log(getLongestSubsequence(
  ["d"],
  [1]
))

function getLongestSubsequence(words, groups) {
  const subsequence = []
  for (let i = 1; i < groups.length; i++) {
    if (groups[i - 1] !== groups[i]) {
      if (subsequence.length === 0) {
        subsequence.push(words[i - 1])
      }
      subsequence.push(words[i])
    }
  }
  return subsequence.length === 0 ? words.slice(0, 1) : subsequence
}
