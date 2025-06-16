function isHappy(n) {
  if (n === 1) {
    return 1
  }
  const fn = n => String(n).split('').reduce((sum, c) => sum += Math.pow(parseInt(c, 10), 2), 0)
  const used = new Set([n])
  let _n = n
  while (true) {
    _n = fn(_n)
    if (used.has(_n)) {
      return false
    }
    used.add(_n)
    if (_n === 1) {
      return true
    }
  }
}
