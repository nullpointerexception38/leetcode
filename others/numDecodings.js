function numDecodings(str) {
  if (str[0] === '0') {
    return 0
  }
  let a = 1
  let b = 0
  for (let i = 1; i < str.length; i++) {
    const prev = str[i - 1]
    const char = str[i]
    let nextB = b
    if (a > 0) {
      if (canCombine(prev, char)) {
        nextB += a
      }
      if (char === '0') {
        a = 0
      }
    }
    if (b > 0) {
      if (char !== '0') {
        a += b
      }
      nextB -= b
    }
    b = nextB
  }
  return a + b
}

function canCombine(prev, char) {
  if (prev === '1') {
    return true
  }
  if (prev === '2') {
    const num = parseInt(char, 10)
    return 0 <= num && num <= 6
  }
  return false
}
