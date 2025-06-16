function minSteps(s, t) {
  const sCharCountMap = getCharCountMap(s)
  let miss = 0
  for (const c of t) {
    const sRow = sCharCountMap[c]
    if (!sRow) {
      miss++
      continue
    }
    if (sRow.tCount + 1 <= sRow.sCount) {
      sRow.tCount++
    } else {
      miss++
    }
  }
  return miss
}

function getCharCountMap(str) {
  return str.split('')
    .reduce((obj, c) => {
      if (typeof obj[c] === 'undefined') {
        obj[c] = {
          sCount: 1,
          tCount: 0
        }
      } else {
        obj[c].sCount++
      }
      return obj
    }, {})
}

console.log(minSteps('bab', 'aba'))
