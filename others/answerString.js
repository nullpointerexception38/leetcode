/*console.log(answerString('epbbppl', 2))
console.log(answerString('gggg', 4))
console.log(answerString('bagj', 3))
console.log(answerString('djhk', 3))
console.log(answerString('aann', 2))*/

console.log(answerString('dbca', 2))

function answerString(word, numFriends) {
  if (numFriends === 1) {
    return word
  }
  const n = word.length
  const maxSplit = n - numFriends + 1
  let answer = ''
  for (let i = 0; i < n; i++) {
    const str = word.substring(i, Math.min(i + maxSplit, n))
    if (answer < str) {
      answer = str
    }
  }
  return answer
}
