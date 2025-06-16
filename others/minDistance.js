function minDistance(word1, word2) {
  const dp = new Map()
  const set = (i, j, value) => dp.set(`${i}:${j}`, value)
  const get = (i, j) => dp.get(`${i}:${j}`) ?? 0
  for (let i = -1; i < word1.length; i++) {
    const char1 = i === -1 ? '' : word1[i]
    for (let j = -1; j < word2.length; j++) {
      const char2 = j === -1 ? '' : word2[j]
      if (char1 === '' && char2 === '') {
        set(i, j, 0)
      }
      else if (i === -1) {
        set(i, j, j + 1)
      }
      else if (j === -1) {
        set(i, j, i + 1)
      }
      else {
        const deleteDistance = get(i - 1, j) + 1
        const insertDistance = get(i, j - 1) + 1
        const substiuteDisntance = get(i - 1, j - 1) + (char1 === char2 ? 0 : 1)
        set(i, j, Math.min(insertDistance, deleteDistance, substiuteDisntance))
      }
    }
  }
  return get(word1.length - 1, word2.length - 1)
}
