function minimumRecolors(blocks, k) {
  let whiteCount = 0
  let answer = Infinity
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i] === 'W') {
      whiteCount++
    }
    if (i >= k && blocks[i - k] === 'W') {
      whiteCount--
    }
    if (i >= k - 1) {
      answer = Math.min(answer, whiteCount)
    }
  }
  return answer
}
