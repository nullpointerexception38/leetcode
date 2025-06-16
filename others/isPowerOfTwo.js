function isPowerOfTwo(n) {
  let num = 1
  while (num <= n && num > 0) {
    if (num === n) {
      return true
    }
    num = num << 1
  }
  return false
}
