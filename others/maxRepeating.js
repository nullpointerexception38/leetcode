function maxRepeating(sequence, word) {
  const items = []
  let start = 0
  while (true) {
    const [count, nextStart] = getConsecutiveCount(sequence, word, start)
    items.push([start, count])
    if (nextStart === -1) {
      break
    }
    start = nextStart
  }
  let maxCount = 0
  for (const [start, count] of items) {
    const previousCount = getPreviousCount(sequence, word, start)
    const correctedCount = previousCount + count
    if (correctedCount > maxCount) {
      maxCount = correctedCount
    }
  }
  return maxCount
}

function getPreviousCount(sequence, word, start) {
  const wordLength = word.length
  let count = 0
  let _start = start - wordLength
  while (true) {
    const index = sequence.indexOf(word, _start)
    if (index === -1) {
      return count
    }
    if (index !== _start) {
      return count
    }
    count++
    _start = _start - wordLength
  }
}

function getConsecutiveCount(sequence, word, start) {
  const wordLength = word.length
  let count = 0
  let index = -1
  let _start = start
  while (true) {
    const index = sequence.indexOf(word, _start)
    if (index === -1) {
      return [count, -1]
    }
    if (index !== _start) {
      return [count, index]
    }
    count++
    _start = index + wordLength
  }
}

console.log(maxRepeating(
  'aaabaaaabaaabaaaabaaaabaaaabaaaaba',
  'aaaba'
))
