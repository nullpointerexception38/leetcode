function letterCasePermutation(str) {
  const { length } = str
  const isLetter = char => /^[a-zA-Z]$/.test(char)
  if (length === 0) {
    return str
  }
  if (length === 1) {
    if (isLetter(str)) {
      return [str.toUpperCase(), str.toLowerCase()]
    }
    return [str]
  }
  const first = str[0]
  const rest = str.slice(1)
  const firstArr = letterCasePermutation(first)
  const restArr = letterCasePermutation(rest)
  let res = []
  for (const f of firstArr) {
    for (const restStr of restArr) {
      res.push(f + restStr)
    }
  }
  return res
}

console.log(letterCasePermutation('a1b2'))
