console.log(maximumLengthSubstring('aabbcc'))

function maximumLengthSubstring(s) {
  const map = new Map()
  let i = 0
  let answer = 0
  for (let j = 0; j < s.length; j++) {
    const char = s[j]
    let [indexes, pos, count] = map.get(char) ?? [[], 0, 0]
    if (count >= 2) {
      i = Math.max(i, indexes[pos] + 1)
      indexes.push(j)
      map.set(char, [indexes, pos + 1, count])
    }
    else {
      indexes.push(j)
      map.set(char, [indexes, pos, count + 1])
    }
    answer = Math.max(answer, j - i + 1)
  }
  return answer
}
