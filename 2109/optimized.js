console.log(addSpaces(
  'LeetcodeHelpsMeLearn',
  [1]
))

function addSpaces(s, spaces) {
  const n = s.length
  const res = []
  let j = 0
  for (let i = 0; i < n; i++) {
    if (i === spaces[j]) {
      res.push(s.slice(spaces[j - 1] ?? 0, spaces[j]))
      j++
    }
  }
  if (spaces[j - 1] < n) {
    res.push(s.slice(spaces[j - 1]))
  }
  return res.join(' ')
}
