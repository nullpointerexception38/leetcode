function numSub(str) {
  let count = 0
  let num = 0
  for (const char of str) {
    if (char === '1') {
      num += 1
      count += num
    } else {
      num = 0
    }
  }
  return count % 1000000007
}
