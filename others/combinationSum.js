function combinationSum(candidates, target) {
  const combinations = []
  ;(function checkCombinationSum(current, used) {
    for (const candidate of candidates) {
      const nextCurrent = current - candidate
      if (nextCurrent < 0) {
        continue
      }
      const nextUsed = used.slice()
      nextUsed.push(candidate)
      if (nextCurrent === 0) {
        combinations.push(nextUsed)
      } else {
        checkCombinationSum(nextCurrent, nextUsed)
      }
    }
  })(target, [])
  const existedFrequencyMapSet = new Map()
  for (const combination of combinations) {
    const frequencyMap = combination.slice()
      .sort((a, b) => a - b)
      .reduce((map, num) => {
        const count = map.get(num) ?? 0
        map.set(num, count + 1)
        return map
      }, new Map())
    const key = Array.from(frequencyMap).map(([key, value]) => `${key}:${value}`).join('-')
    existedFrequencyMapSet.set(key, frequencyMap)
  }
  return Array.from(existedFrequencyMapSet)
    .map(([key, frequencyMap]) => {
      return Array.from(frequencyMap).reduce((arr, [num, count]) => arr.concat(Array.from({ length: count }).fill(num)), [])
    })
}
