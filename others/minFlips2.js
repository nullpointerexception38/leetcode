console.log(minFlips(1, 2, 3))

function minFlips(a, b, c) {
  let count = 0
  while (a > 0 || b > 0 || c > 0) {
    const _a = a & 1
    const _b = b & 1
    if ((c & 1) === 0) {
      count += _a + _b
    }
    else if (_a === 0 && _b === 0) {
      count++
    }
    a >>= 1
    b >>= 1
    c >>= 1
  }
  return count
}
