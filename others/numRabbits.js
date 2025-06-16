function numRabbits(answers) {
  const map = new Map()
  for (const answer of answers) {
    const count = map.get(answer) ?? 0
    map.set(answer, count + 1)
  }
  let sum = 0
  for (const [answer, count] of map) {
    const realCount = answer + 1
    const groups = Math.ceil(count / realCount)
    sum += (realCount * groups)
  }
  return sum
}
