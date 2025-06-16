function stringSequence(target) {
  const targetLength = target.length
  const res = []
  let index = 0
  let str = ''
  for (let i = 0; i < target.length; i++) {
    const sourceChar = str[i]
    const targetChar = target[i]
    const defined = typeof sourceChar !== 'undefined'
    if (!defined) {
      str += 'a'
      res.push(str)
      i--
      continue
    }
    if (sourceChar !== targetChar) {
      let nextCharCode = sourceChar.charCodeAt(0) + 1
      nextCharCode = nextCharCode > 122 ? 97 + (nextCharCode % 123) : nextCharCode
      str = str.slice(0, i) + String.fromCharCode(nextCharCode) + str.slice(i + 1)
      res.push(str)
      i--
      continue
    }
  }
  return res
}

console.log(stringSequence('abc'))
