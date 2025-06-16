function compress(chars) {
  let str = ''
  let current = ''
  let count = 0
  for (const char of chars) {
    if (current === '') {
      current = char
      count++
    }
    else if (current === char) {
      count++
    }
    else {
      str += current
      if (count > 1) {
        str += String(count)
      }
      current = char
      count = 1
    }
  }
  if (current) {
    str += current
    if (count > 1) {
      str += String(count)
    }
  }
  const n = str.length
  for (let i = 0; i < n; i++) {
    chars[i] = str[i]
  }
  chars.length = n
  return n
}
