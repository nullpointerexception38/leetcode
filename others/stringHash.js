function stringHash(s, k) {
  const size = s.length
  let sum = 0
  let res = ''
  for (let i = 0; i < size; i++) {
    console.log('here', s.charCodeAt(i) - 97)
    sum += s.charCodeAt(i) - 97
    if ((i + 1) % k === 0) {
      const charCode = sum % 26 + 97
      res += String.fromCharCode(charCode)
      sum = 0
    }
  }
  return res
}
