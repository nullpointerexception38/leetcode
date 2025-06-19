function equalSubstring(s, t, maxCost) {
  const getCost = i => Math.abs(s[i].charCodeAt(0) - t[i].charCodeAt(0))
  let i = 0
  let cost = 0
  let answer = 0
  for (let j = 0; j < s.length; j++) {
    cost += getCost(j)
    if (cost > maxCost) {
      while (cost > maxCost) {
        cost -= getCost(i)
        i++
      }
      if (i > j) {
        j = i - 1
      }
    }
    else {
      answer = Math.max(answer, j - i + 1)
    }
  }
  return answer
}
