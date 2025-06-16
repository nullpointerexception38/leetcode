function countVowelStrings(n) {
  const vowelIndexes = [0, 1, 2, 3, 4]
  const size = vowelIndexes.length
  const count = n => {
    if (n === 1) {
      return vowelIndexes
    }
    return count(n - 1).reduce((res, start) => {
      for (let j = start; j < size; j++) {
        res.push(j)
      }
      return res
    }, [])
  }
  return count(n).length
}
