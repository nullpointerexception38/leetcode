console.log(equalFrequency('aaabbcc'))
console.log(equalFrequency('ddaccb'))

function equalFrequency(word) {
  const map = new Map()
  let maxCount = -Infinity
  for (const char of word) {
    const count = map.get(char) ?? 0
    map.set(char, count + 1)
    maxCount = Math.max(maxCount, count + 1)
  }
  const nums = Array.from(map.values())
  const numMap = new Map()
  for (const num of nums) {
    const count = numMap.get(num) ?? 0
    numMap.set(num, count + 1)
  }
  if (numMap.size > 2) {
    return false
  }
  if (numMap.size === 1) {
    const [key, value] = Array.from(numMap)[0]
    return key === 1 || value === 1
  }
  console.log(numMap)
  for (const [num, count] of numMap) {
    if (num === 1 && count === 1) {
      return true
    }
  }
  const rows = Array.from(numMap).sort(([numA, countA], [numB, countB]) => {
    if (countA === countB) {
      return numB - numA
    }
    return countA - countB
  })
  return rows[0][1] === 1 && rows[0][0] - rows[1][0] === 1
}
