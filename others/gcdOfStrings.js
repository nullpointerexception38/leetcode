function gcdOfStrings(str1, str2) {
  const [s1, s2] = str1.length > str2.length ? [str1, str2] : [str2, str1]
  const isDivisible = (a, b) => {
    const bLength = b.length
    let sum = b
    for (let i = 0; i < a.length; i += bLength) {
      if (sum !== a.slice(0, i + bLength)) {
        return false
      }
      sum += b
    }
    return true
  }
  for (let i = str2.length - 1; i >= 0; i--) {
    const prefix = str2.slice(0, i + 1)
    if (isDivisible(str1, prefix) && isDivisible(str2, prefix)) {
      return prefix
    }
  }
  return ''
}
