console.log(maxRepOpt1('abc'))
console.log(maxRepOpt1('cabc'))

function maxRepOpt1(text) {
  const n = text.length
  const freq = new Map()
  for (const char of text) {
    freq.set(char, (freq.get(char) ?? 0) + 1)
  }
  if (freq.size === 1) {
    return n
  }
  const map = new Map()
  let left = 0
  let count = 0
  for (let i = 0; i < n; i++) {
    const char = text[i]
    map.set(char, (map.get(char) ?? 0) + 1)
    freq.set(char, freq.get(char) - 1)
    let mainChar = ''
    let replaceChar = ''
    while (true) {
      if (map.size < 2) {
        break
      }
      let hasReplaceChar = false
      for (const [_char, count] of map) {
        if (count < 2) {
          replaceChar = _char
          hasReplaceChar = true
        }
        else {
          mainChar = _char
        }
      }
      if (hasReplaceChar && map.size === 2) {
        break
      }
      const dropped = text[left++]
      const charCount = map.get(dropped)
      if (charCount === 1) {
        map.delete(dropped)
      }
      else {
        map.set(dropped, charCount - 1)
      }
      freq.set(dropped, freq.get(dropped) + 1)
    }
    if (!mainChar && replaceChar) {
      for (const [_char] of map) {
        if (_char !== replaceChar) {
          mainChar = _char
        }
      }
    }
    if (mainChar && replaceChar) {
      const delta = freq.get(mainChar) > 0 ? 0 : -1
      count = Math.max(count, i - left + 1 + delta)
    }
  }
  return count
}
