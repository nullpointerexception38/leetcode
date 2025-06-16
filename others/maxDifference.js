function maxDifference(s) {
  const map = new Map()
  for (const char of s) {
    const count = map.get(char) ?? 0
    map.set(char, count + 1)
  }
  let maxOdd = 0
  let minEven = Infinity
  for (const [, frequency] of map) {
    if (frequency % 2 === 0) {
      minEven = Math.min(minEven, frequency)
    }
    else {
      maxOdd = Math.max(maxOdd, frequency)
    }
  }
  return maxOdd - minEven
}

console.log(maxDifference('mmsmsym'))
