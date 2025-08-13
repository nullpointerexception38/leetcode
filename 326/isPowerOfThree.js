function isPowerOfThree(n) {
  let value = 1
  while (true) {
    if (value === n) {
      return true
    }
    if (value > n) {
      return false
    }
    value *= 3
  }
}
