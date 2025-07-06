function judgeSquareSum(c) {
  let i = 0
  let j = Math.floor(Math.sqrt(c))
  while (i <= j) {
    const sum = (i * i) + (j * j)
    if (sum === c) {
      return true
    }
    if (sum > c) {
      j--
    }
    else {
      i++
    }
  }
  return false
}
