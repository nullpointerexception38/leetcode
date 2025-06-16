console.log(canMakePaliQueries(
  'ab',
  [[0, 0, 0]]
))

function canMakePaliQueries(str, queries) {
  const indexCountMap = []
  const countMap = Array.from({ length: 26 }).fill(0)
  for (const char of str) {
    countMap[char.charCodeAt(0) - 97]++
    indexCountMap.push(countMap.slice())
  }
  return queries.map(([left, right, k]) => {
    let oddCount = 0
    const rightMap = indexCountMap[right]
    for (let i = 0; i < rightMap.length; i++) {
      const leftCount = left === 0 ? 0 : indexCountMap[left - 1][i]
      oddCount += (indexCountMap[right][i] - leftCount) % 2
    }
    return Math.floor(oddCount / 2) <= k
  })
}
