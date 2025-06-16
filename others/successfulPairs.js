console.log(successfulPairs(
  [3],
  [1,2,3,4,5],
  16
))

function successfulPairs(spells, potions, success) {
  const n = potions.length
  const answer = []
  potions.sort((a, b) => a - b)
  for (const spell of spells) {
    let i = 0
    let j = n
    let pos = n
    while (i <= j) {
      const mid = i + j >>> 1
      if (spell * potions[mid] >= success) {
        pos = mid
        j = mid - 1
      }
      else {
        i = mid + 1
      }
    }
    answer.push(n - pos)
  }
  return answer
}
