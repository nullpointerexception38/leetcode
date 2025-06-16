function maxScore(s) {
  const n = s.length
  let ones = 0
  for (let i = 0; i < n; i++) {
    if (s[i] === '1') {
      ones++
    }
  }
  let leftOnes = 0
  let answer = 0
  for (let i = 1; i < n; i++) {
    if (s[i - 1] === '1') {
      leftOnes++
    }
    answer = Math.max(answer, (i - leftOnes) + (ones - leftOnes))
  }
  return answer
}

console.log(maxScore('0011101')) // 6
console.log(maxScore('00000101'))  // 7
console.log(maxScore('0000')) // 3
console.log(maxScore('1111')) // 3

console.log(maxScore('11100')) // 2
console.log(maxScore('01001')) // 4
